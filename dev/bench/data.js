window.BENCHMARK_DATA = {
  "lastUpdate": 1605016074862,
  "repoUrl": "https://github.com/7feilee/PySyft",
  "entries": {
    "Python Benchmark with pytestbenchmark": [
      {
        "commit": {
          "author": {
            "email": "36106177+ramesht007@users.noreply.github.com",
            "name": "Ramesht Shukla",
            "username": "ramesht007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "055349ee17034a6747618b04050d2f7d1a6a49bb",
          "message": "Improve tests for AST to support FSS and SNN crypto protocols (#4646)\n\n* add_tests\r\n\r\n* suggested_changes\r\n\r\n* reformatting\r\n\r\n* remove reformatting",
          "timestamp": "2020-10-14T14:42:40+02:00",
          "tree_id": "e7e1434d04f7d6a3629f9fe8ac7fa95c95a5df5b",
          "url": "https://github.com/7feilee/PySyft/commit/055349ee17034a6747618b04050d2f7d1a6a49bb"
        },
        "date": 1602958931835,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 0.7149851602649222,
            "unit": "iter/sec",
            "range": "stddev: 0.0217117820735206",
            "extra": "mean: 1.3986304270000118 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.0451721990407433,
            "unit": "iter/sec",
            "range": "stddev: 0.10156868755210724",
            "extra": "mean: 22.13750982319999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 0.7231742314077646,
            "unit": "iter/sec",
            "range": "stddev: 0.03214480095966589",
            "extra": "mean: 1.3827926336000018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 11.291889290217695,
            "unit": "iter/sec",
            "range": "stddev: 0.0026294408408104567",
            "extra": "mean: 88.55913959998816 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 0.7162328947057647,
            "unit": "iter/sec",
            "range": "stddev: 0.02830500984490074",
            "extra": "mean: 1.3961939020000045 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rladhkstn8@gmail.com",
            "name": "Wansoo Kim",
            "username": "marload"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35ea7282f484091070e0e2af6754902ec0cf34b1",
          "message": "Add FPT support for mul or div operation with float scalar (#4713)\n\n* fix precision mul float\r\n\r\n* black formatting\r\n\r\n* fix\r\n\r\n* fix\r\n\r\n* fix\r\n\r\n* add test",
          "timestamp": "2020-11-09T19:17:31+01:00",
          "tree_id": "0ef30aa63787ecb10090ec1c3183b4f3df68b1b4",
          "url": "https://github.com/7feilee/PySyft/commit/35ea7282f484091070e0e2af6754902ec0cf34b1"
        },
        "date": 1605016073873,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_chebyshev",
            "value": 1.0377467491176837,
            "unit": "iter/sec",
            "range": "stddev: 0.022755620239014417",
            "extra": "mean: 963.6262420000094 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_sigmoid",
            "value": 1.0234268327661533,
            "unit": "iter/sec",
            "range": "stddev: 0.03127812296976026",
            "extra": "mean: 977.1094210000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_maclaurin",
            "value": 15.219579156075591,
            "unit": "iter/sec",
            "range": "stddev: 0.002568336001350013",
            "extra": "mean: 65.70483912499014 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_sigmoid_exp",
            "value": 0.06337419344339737,
            "unit": "iter/sec",
            "range": "stddev: 0.37358008943051657",
            "extra": "mean: 15.779293520999989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/frameworks/torch/mpc/pytestbenchmark/bench.py::test_tanh_chebyshev",
            "value": 1.0370560309256318,
            "unit": "iter/sec",
            "range": "stddev: 0.03521773006585812",
            "extra": "mean: 964.2680532000213 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}