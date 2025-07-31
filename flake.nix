{
  description = "Personal Website Nix Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = inputs: with inputs;
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; overlays = [(final: prev: { nodejs = final.nodejs_22; }) ]; };

        website = with pkgs; buildNpmPackage {
          pname = "ajo41.dev";
          version = "dev";
          
          src = lib.cleanSource ./.;

          npmDeps = importNpmLock { npmRoot = ./.; };
          npmConfigHook = importNpmLock.npmConfigHook;
        };
      in
      {
        packages = { default = website; };
        devShells.default = with pkgs; mkShell {
          buildInputs = [
            nodejs
          ];
        };
      });
}
