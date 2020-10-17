window.BENCHMARK_DATA = {
  "lastUpdate": 1602958933138,
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
      }
    ]
  }
}