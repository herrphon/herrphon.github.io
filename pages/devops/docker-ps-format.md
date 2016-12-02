---
layout: page
title: "Docker PS Format"
description: ""
---



## Default behaviour


``` sh
$ docker ps

CONTAINER ID        IMAGE                  COMMAND                   CREATED             STATUS                      PORTS                    NAMES
42d1a113aeac        postgres:9.3           "/docker-entrypoin..."    16 hours ago        Up 16 hours                 5432/tcp                 hpg-postgres
9d29a5578e5d        postgres:9.3           "/docker-entrypoin..."    16 hours ago        Exited (0) 16 hours ago                              distracted_dijkstra
892c36b8acb8        2720ba41b903           "/bin/bash"               19 hours ago        Exited (0) 19 hours ago                              ba_importer_run_5
5f5cd396ccd6        2720ba41b903           "/bin/sh -c './wai..."    19 hours ago        Exited (130) 19 hours ago                            ba_importer_run_4
749ef22b2e2d        2720ba41b903           "/bin/sh -c './wai..."    20 hours ago        Exited (130) 20 hours ago                            ba_importer_run_3
085514a0bd35        2720ba41b903           "/bin/sh -c './wai..."    20 hours ago        Exited (130) 20 hours ago                            ba_importer_run_2
5055d7b1b3f1        2720ba41b903           "/bin/sh -c './wai..."    20 hours ago        Exited (130) 20 hours ago                            ba_importer_run_1
56d04dd465de        grafana/grafana        "/run.sh"                 21 hours ago        Up 21 hours                 0.0.0.0:3000->3000/tcp   prometheus_grafana_1
171e1fa9954b        prom/alertmanager      "/bin/alertmanager..."    21 hours ago        Up 21 hours                 9093/tcp                 prometheus_alertmanager_1
af857825047e        prom/node-exporter     "/bin/node_exporter"      21 hours ago        Up 21 hours                 0.0.0.0:9100->9100/tcp   prometheus_node-exporter_1
27be72aa5c76        prom/prometheus        "/bin/prometheus -..."    21 hours ago        Up 21 hours                 0.0.0.0:9090->9090/tcp   prometheus_prometheus_1
442f306bf72a        google/cadvisor        "/usr/bin/cadvisor..."    21 hours ago        Up 21 hours                 0.0.0.0:9110->8080/tcp   prometheus_cadvisor_1
41aa3f1be4da        abcdefghi/check_mk     "/bin/sh -c \"/entr..."   22 hours ago        Up 22 hours                 0.0.0.0:80->80/tcp       check_mk
ae09c2cfa35e        2720ba41b903           "/bin/sh -c './wai..."    22 hours ago        Exited (137) 22 hours ago                            ba_importer_1
1cd37f3c65ef        7ba4f6e9e5fe           "/docker-entrypoin..."    22 hours ago        Up 22 hours                 0.0.0.0:5432->5432/tcp   ba_ba-autoverify-db_1
3094281ef286        7ba4f6e9e5fe           "/docker-entrypoin..."    22 hours ago        Up 22 hours                 0.0.0.0:5433->5432/tcp   ba_ba-db_1
8c5d8f052014        manomarks/visualizer   "npm start"               2 weeks ago         Up 22 hours                 0.0.0.0:8083->8080/tcp   visualizer

```  



## Smaller Format

Remove CONTAINER_ID and CREATED and only use NAMES, IMAGE, COMMAND, STATUS, and PORTS.

``` sh
$ mkdir -p ~/.docker
$ cat >> ~/.docker/config.json <<EOF

{ 
    "psFormat": "table {{with $n := .Names}}{{printf \"%.25s\" $n}}{{if gt (len $n) 25}}...{{end}}{{end}}\\t{{with $i := .Image}}{{printf \"%.25s\" $i}}{{if gt (len $i) 25}}...{{end}}{{end}}\\t{{.Command}}\\t{{.Status}}\\t{{.Ports}}"
}

EOF
``` 

``` sh
docker ps --format "table {{.Names}}\\t{{.Image}}\\t{{.Command}}\\t{{.Status}}\\t{{.Ports}}"
if [ $(docker ps --filter status=exited --format "{{.ID}}") != "" ]; then
    docker ps --filter status=exited --format "table {{.Names}}\\t{{.Image}}\\t{{.Command}}\\t{{.Status}}\\t{{.Ports}}"
fi
``` 
 
 
``` sh
$ docker ps

NAMES                        IMAGE                  COMMAND                   STATUS              PORTS
check_mk                     027452c9862b           "/bin/sh -c \"/entr..."   Up 3 days           0.0.0.0:80->80/tcp
prometheus_grafana_1         grafana/grafana        "/run.sh"                 Up 3 days           0.0.0.0:3000->3000/tcp
prometheus_alertmanager_1    prom/alertmanager      "/bin/alertmanager..."    Up 3 days           9093/tcp
prometheus_node-exporter_1   prom/node-exporter     "/bin/node_exporter"      Up 3 days           0.0.0.0:9100->9100/tcp
prometheus_prometheus_1      prom/prometheus        "/bin/prometheus -..."    Up 3 days           0.0.0.0:9090->9090/tcp
prometheus_cadvisor_1        google/cadvisor        "/usr/bin/cadvisor..."    Up 3 days           0.0.0.0:9110->8080/tcp
ba-autoverify-db_1           7ba4f6e9e5fe           "/docker-entrypoin..."    Up 3 days           0.0.0.0:5432->5432/tcp
ba-db_1                      7ba4f6e9e5fe           "/docker-entrypoin..."    Up 3 days           0.0.0.0:5433->5432/tcp
visualizer                   manomarks/visualizer   "npm start"               Up 3 days           0.0.0.0:8083->8080/tcp

``` 

