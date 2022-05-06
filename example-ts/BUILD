load("@npm//next:index.bzl", "next")
load("@build_bazel_rules_nodejs//:index.bzl", "copy_to_bin")

PACKAGES = [
    "@npm//react",
    "@npm//react-dom",
    "@npm//typescript",
    "@npm//@types/react",
    "@npm//@types/node",
]

FILES = glob([
    "styles/**/*.css",
    "pages/**/*.tsx",
    "public/**/*.tsx",
] + [
    ":Global.d.ts"
])

CONFIGS = [
    "next.config.js",
    "tsconfig.json",
]

copy_to_bin(
    name = "files",
    srcs = FILES + CONFIGS,
)

next(
    name = "example-ts",
    outs = [
        ".next",
    ],
    args = [
        "build",
        "$(RULEDIR)",
    ],
    data = [":files"] + PACKAGES,
)

next(
    name = "start",
    args = [
        "start -p 8090",
        "example-ts"
    ],
    data = [
        ":example-ts",
    ],
)
