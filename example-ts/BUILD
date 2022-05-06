load("@build_bazel_rules_nodejs//:index.bzl", "js_library")
load("@npm//@bazel/typescript:index.bzl", "ts_project")
load("@npm//next:index.bzl", "next")
load("@build_bazel_rules_nodejs//:index.bzl", "copy_to_bin")

ts_project(
    name = "pages",
    srcs = glob([
        "pages/**/*.tsx",
    ]) + [
        ":Global.d.ts"
    ],
    deps = [
        "@npm//next",
        "@npm//@types/react",
    ],
    extends = "//example-ts:tsconfig.json",
    tsconfig = {},
    preserve_jsx = True,
    visibility = ["//visibility:public"],
)

PACKAGES = [
    "@npm//react",
    "@npm//react-dom",
]

copy_to_bin(
    name = "static",
    srcs = glob([
        "styles/**/*.css"
    ])
)

copy_to_bin(
    name = "config",
    srcs = [
        "next.config.js",
        "package.json"
    ]
)

exports_files(
    [
        "tsconfig.json"
    ]
)

DATA = [
    ":config",
    ":pages",
    ":static"
]

next(
    name = ".next",
    args = [
        "build",
    ],
    data = DATA,# + PACKAGES,
    chdir = "$(RULEDIR)",
    output_dir = True,
)

next(
    name = "start",
    args = [
        "start -p 8090",
        "--node_options=--preserve-symlinks-main",
        "example-ts"
    ],
    data = [
        ":.next",
    ],
    #templated_args = ["--bazel_patch_module_resolver"],
)
