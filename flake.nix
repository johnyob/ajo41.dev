{
  description = "Personal Website Nix Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    treefmt = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs:
    with inputs;
      flake-utils.lib.eachDefaultSystem (system: let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [(final: prev: {nodejs = final.nodejs_22;})];
        };

        fmt = treefmt.lib.evalModule pkgs {
          projectRootFile = "flake.nix";

          programs.alejandra.enable = true;
          programs.prettier.enable = true;

          settings.global.excludes = ["result" ".direnv" ".next" "node_modules"];
        };

        website = with pkgs;
          buildNpmPackage {
            pname = "ajo41.dev";
            version = "dev";

            src = lib.cleanSource ./.;

            npmDeps = importNpmLock {npmRoot = ./.;};
            npmConfigHook = importNpmLock.npmConfigHook;

            installPhase = ''
              mkdir -p $out
              mv .next/* $out
            '';
          };
      in {
        packages = {default = website;};
        formatter = fmt.config.build.wrapper;

        devShells.default = with pkgs;
          mkShell {
            buildInputs = [
              alejandra
              nodejs
              nodePackages.vercel
            ];
          };
      });
}
