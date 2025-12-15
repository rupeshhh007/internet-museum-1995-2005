export function ping(host) {
    return [
      `PING ${host} (64 bytes)`,
      "Reply from 8.8.8.8: time=32ms",
      "Reply from 8.8.8.8: time=30ms",
      "Reply from 8.8.8.8: time=28ms"
    ];
  }
  
  export function traceroute(host) {
    return [
      "1  192.168.0.1",
      "2  10.0.0.1",
      "3  isp.gateway",
      `4  ${host}`
    ];
  }
  
  export function ifconfig() {
    return [
      "eth0  inet 192.168.1.10",
      "lo    inet 127.0.0.1"
    ];
  }
  
  export function netstat() {
    return [
      "Proto  Port  Service",
      "tcp    80    http",
      "tcp    21    ftp",
      "udp    53    dns"
    ];
  }
  
  export function nslookup(domain) {
    return [`${domain} → 98.137.11.163`];
  }
  