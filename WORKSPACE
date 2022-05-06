workspace(
    name = "bazel-next"
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# http_archive(
#         name = "build_bazel_rules_nodejs",
#         sha256 = "c911b5bd8aee8b0498cc387cacdb5f917098ce477fb4182db07b0ef8a9e045c0",
#         urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.7.1/rules_nodejs-4.7.1.tar.gz"],
# )
# http_archive(
#     name = "build_bazel_rules_nodejs",
#     # patches = ["//:rules_nodejs.patch"],
#     sha256 = "d63ecec7192394f5cc4ad95a115f8a6c9de55c60d56c1f08da79c306355e4654",
#     urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.6.1/rules_nodejs-4.6.1.tar.gz"],
# )

http_archive(
        name = "build_bazel_rules_nodejs",
        sha256 = "e328cb2c9401be495fa7d79c306f5ee3040e8a03b2ebb79b022e15ca03770096",
        urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.4.2/rules_nodejs-5.4.2.tar.gz"],
)


# NodeJS rules dependencies
load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")
build_bazel_rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")
node_repositories(
        node_version = "16.9.0",
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")
yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    args = ["--production"],
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
    frozen_lockfile = True,
    symlink_node_modules = False,
)