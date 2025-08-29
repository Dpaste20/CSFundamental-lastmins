// src/data/cnQuestions.ts
import type { Question } from '../types';

export const cnQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary function of the OSI model's Application Layer?",
    options: [
      "To manage network connections between applications",
      "To transmit raw data bits over a physical medium",
      "To provide network services directly to end-user applications",
      "To handle the routing of data packets across networks"
    ],
    correctAnswer: 2,
    explanation: "The Application Layer (Layer 7) is the highest layer in the OSI model. It directly interacts with software applications to provide communication services. It's responsible for protocols that users and applications commonly interact with, such as HTTP, FTP, and SMTP."
  },
  {
    id: 2,
    question: "Which of the following is a key difference between a hub and a switch?",
    options: [
      "A hub operates at the Data Link Layer, while a switch operates at the Physical Layer",
      "A hub sends data to all its ports, while a switch sends data only to the intended port",
      "A hub is more secure than a switch",
      "A hub can handle more traffic than a switch"
    ],
    correctAnswer: 1,
    explanation: "A hub is a basic networking device that broadcasts incoming data packets to all of its ports. In contrast, a switch is more intelligent; it can identify the intended recipient of a data packet and forward it only to the specific port connected to that device, which improves efficiency and reduces network congestion."
  },
  {
    id: 3,
    question: "What is the main purpose of DNS (Domain Name System)?",
    options: [
        "To assign IP addresses to devices on a network",
        "To translate human-readable domain names into IP addresses",
        "To secure communication between a web browser and a server",
        "To route data packets between different networks"
    ],
    correctAnswer: 1,
    explanation: "DNS acts as the phonebook of the internet. Humans access information online through domain names like google.com. DNS translates these memorable domain names into the numerical IP addresses necessary for locating and identifying computer services and devices."
  },
  {
    id: 4,
    question: "Which of the following statements is true about TCP (Transmission Control Protocol)?",
    options: [
        "It is a connectionless protocol",
        "It is faster than UDP for all types of communication",
        "It guarantees the delivery and order of data packets",
        "It is primarily used for video streaming"
    ],
    correctAnswer: 2,
    explanation: "TCP is a connection-oriented protocol that establishes a connection before transmitting data. It includes mechanisms for error-checking, acknowledgments, and re-transmitting lost packets to ensure that data is received correctly and in the proper sequence. This reliability makes it suitable for applications like file transfers and email."
  },
  {
    id: 5,
    question: "What is the function of a subnet mask?",
    options: [
        "To hide the IP address of a device",
        "To identify the network and host portions of an IP address",
        "To dynamically assign IP addresses",
        "To encrypt network traffic"
    ],
    correctAnswer: 1,
    explanation: "A subnet mask is a 32-bit number that 'masks' an IP address and divides it into the network address and the host address. This separation is crucial for routers to determine where to forward data packets."
  },
  {
    id: 6,
    question: "In the context of web browsing, what does HTTPS ensure?",
    options: [
        "Faster loading of web pages",
        "Caching of website content on a user's computer",
        "A secure, encrypted connection between the browser and the server",
        "The website is mobile-friendly"
    ],
    correctAnswer: 2,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP. It uses SSL/TLS to encrypt the data exchanged between a user's browser and the web server, protecting sensitive information like login credentials and credit card numbers from being intercepted."
  },
  {
    id: 7,
    question: "What is a MAC (Media Access Control) address?",
    options: [
        "A logical address that can be changed by the network administrator",
        "A unique identifier assigned to a network interface controller (NIC) for communications at the data link layer",
        "The IP address of a router",
        "A port number used to identify a specific application on a device"
    ],
    correctAnswer: 1,
    explanation: "A MAC address is a hardware identifier that uniquely identifies each device on a network. It is a 48-bit address that is burned into the network interface card (NIC) by the manufacturer."
  },
  {
    id: 8,
    question: "What is the primary purpose of a router in a network?",
    options: [
        "To connect devices within the same local network",
        "To filter malicious traffic from the internet",
        "To forward data packets between different computer networks",
        "To amplify the network signal to cover a larger area"
    ],
    correctAnswer: 2,
    explanation: "A router operates at the network layer (Layer 3) and is used to connect two or more different networks. It uses IP addresses to determine the best path for forwarding data packets toward their destination."
  },
  {
    id: 9,
    question: "Which of the following is a private IP address?",
    options: [
        "172.168.1.1",
        "192.168.5.10",
        "8.8.8.8",
        "131.107.0.89"
    ],
    correctAnswer: 1,
    explanation: "Private IP addresses are reserved for use within a local network and are not routable on the public internet. The ranges for private IP addresses are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, and 192.168.0.0 to 192.168.255.255."
  },
  {
    id: 10,
    question: "What is a key advantage of using a Content Delivery Network (CDN)?",
    options: [
        "It encrypts all user data",
        "It reduces latency by caching content closer to the user",
        "It provides a private network for an organization",
        "It assigns dynamic IP addresses to users"
    ],
    correctAnswer: 1,
    explanation: "A CDN is a geographically distributed network of proxy servers and their data centers. By caching static content like images, CSS, and JavaScript files in locations physically closer to end-users, a CDN can significantly speed up the loading of web pages."
  },
  {
    id: 11,
    question: "Which protocol is used to send email?",
    options: [ "FTP", "SMTP", "POP3", "HTTP" ],
    correctAnswer: 1,
    explanation: "SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending email messages from a mail client to a mail server."
  },
  {
    id: 12,
    question: "What does the term 'latency' refer to in a network?",
    options: [
        "The total bandwidth of a network connection",
        "The number of data packets that can be sent per second",
        "The time delay in data communication",
        "The amount of data that is lost during transmission"
    ],
    correctAnswer: 2,
    explanation: "Latency is the time it takes for a data packet to travel from its source to its destination. It's a measure of delay and is a critical factor in network performance, especially for real-time applications."
  },
  {
    id: 13,
    question: "What is the primary function of a firewall?",
    options: [
        "To boost the Wi-Fi signal",
        "To monitor and control incoming and outgoing network traffic based on predetermined security rules",
        "To translate domain names into IP addresses",
        "To store frequently accessed data for quicker retrieval"
    ],
    correctAnswer: 1,
    explanation: "A firewall acts as a barrier between a trusted internal network and untrusted external networks, such as the internet. It inspects data packets and blocks or allows them based on a set of security rules, thereby preventing unauthorized access."
  },
  {
    id: 14,
    question: "Which layer of the TCP/IP model is responsible for routing?",
    options: [ "Application Layer", "Transport Layer", "Internet Layer", "Network Access Layer" ],
    correctAnswer: 2,
    explanation: "The Internet Layer of the TCP/IP model is responsible for addressing, packaging, and routing messages on the Internet. The primary protocol at this layer is the Internet Protocol (IP)."
  },
  {
    id: 15,
    question: "What is DHCP (Dynamic Host Configuration Protocol) used for?",
    options: [
        "To encrypt network traffic",
        "To automatically assign IP addresses to devices on a network",
        "To resolve domain names to IP addresses",
        "To manage the transfer of files"
    ],
    correctAnswer: 1,
    explanation: "DHCP is an application layer protocol that automates the process of assigning IP addresses, subnet masks, default gateways, and DNS server information to devices on a network. This simplifies network administration."
  },
  {
    id: 16,
    question: "What is the purpose of the ping command?",
    options: [
        "To check the connectivity between two devices on a network",
        "To measure the bandwidth of a network",
        "To view the routing table of a device",
        "To display the MAC address of a network interface"
    ],
    correctAnswer: 0,
    explanation: "The ping command sends ICMP (Internet Control Message Protocol) echo request packets to a target host and waits for an echo reply. It is a common utility used to test the reachability of a host on an IP network."
  },
  {
    id: 17,
    question: "What is a key characteristic of UDP (User Datagram Protocol)?",
    options: [
        "It establishes a connection before sending data",
        "It is a connectionless protocol that offers low latency",
        "It guarantees that data will be delivered in order",
        "It re-transmits lost packets"
    ],
    correctAnswer: 1,
    explanation: "UDP is a connectionless protocol that sends data without establishing a prior connection. It does not provide the reliability features of TCP, such as guaranteed delivery or ordering of packets. This makes it faster and suitable for time-sensitive applications like video streaming and online gaming where speed is more critical than perfect accuracy."
  },
  {
    id: 18,
    question: "In which network topology are all devices connected to a central hub or switch?",
    options: [ "Bus Topology", "Ring Topology", "Star Topology", "Mesh Topology" ],
    correctAnswer: 2,
    explanation: "In a star topology, all devices are connected to a central device, such as a hub or a switch. This topology is easy to install and manage, and a failure in one cable will only affect one device."
  },
  {
    id: 19,
    question: "What does the HTTP status code 404 Not Found indicate?",
    options: [
        "The request was successful",
        "The server is temporarily unavailable",
        "The requested resource could not be found on the server",
        "The client does not have permission to access the resource"
    ],
    correctAnswer: 2,
    explanation: "The 404 Not Found error message is a standard HTTP status code indicating that the client was able to communicate with the server, but the server could not find the requested resource."
  },
  {
    id: 20,
    question: "What is a VPN (Virtual Private Network)?",
    options: [
        "A network of computers within a single building",
        "A direct physical connection between two remote locations",
        "A secure connection over a public network, such as the internet",
        "A type of wireless network"
    ],
    correctAnswer: 2,
    explanation: "A VPN extends a private network across a public network, enabling users to send and receive data as if their devices were directly connected to the private network. It achieves this by creating a secure and encrypted tunnel for the data to travel through."
  },
  {
    id: 21,
    question: "What is the function of ARP (Address Resolution Protocol)?",
    options: [
        "To resolve IP addresses to MAC addresses",
        "To assign IP addresses to devices",
        "To route traffic between different networks",
        "To translate domain names to IP addresses"
    ],
    correctAnswer: 0,
    explanation: "ARP is used by a device on a local network to find the MAC address of another device when it only knows its IP address. This is necessary for devices to communicate with each other at the Data Link Layer."
  },
  {
    id: 22,
    question: "Which of the following is a function of the Transport Layer?",
    options: [
        "Transmitting raw bits over a physical medium",
        "Providing reliable, end-to-end communication and flow control",
        "Routing packets across multiple networks",
        "Interfacing with the end-user's application"
    ],
    correctAnswer: 1,
    explanation: "The Transport Layer (Layer 4) of the OSI model is responsible for providing reliable data transfer between end systems. It handles tasks like segmenting data, flow control to prevent network congestion, and error control. The two main protocols at this layer are TCP and UDP."
  },
  {
    id: 23,
    question: "What is the default port number for HTTP?",
    options: [ "21", "25", "80", "443" ],
    correctAnswer: 2,
    explanation: "The standard port number for HTTP (Hypertext Transfer Protocol) traffic is port 80."
  },
  {
    id: 24,
    question: "What is the default port number for HTTPS?",
    options: [ "80", "110", "143", "443" ],
    correctAnswer: 3,
    explanation: "The standard port number for HTTPS (HTTP Secure) traffic is port 443."
  },
  {
    id: 25,
    question: "Which of the following is a primary function of a proxy server?",
    options: [
        "To assign IP addresses to devices",
        "To act as an intermediary for requests from clients seeking resources from other servers",
        "To provide a physical connection point for devices on a LAN",
        "To boost the wireless signal strength"
    ],
    correctAnswer: 1,
    explanation: "A proxy server acts as a gateway between a user and the internet. It can be used for various purposes, including filtering web content, improving performance by caching data, and enhancing security by hiding the client's IP address."
  },
  {
    id: 26,
    question: "What does 'bandwidth' in a network refer to?",
    options: [
        "The speed at which data is transmitted",
        "The maximum rate of data transfer across a given path",
        "The number of devices connected to the network",
        "The physical distance the data has to travel"
    ],
    correctAnswer: 1,
    explanation: "Bandwidth represents the data transfer capacity of a computer network. It is typically measured in bits per second (bps)."
  },
  {
    id: 27,
    question: "In the context of the TCP three-way handshake, what are the correct steps?",
    options: [ "SYN, SYN-ACK, FIN", "SYN, ACK, SYN-ACK", "SYN, SYN-ACK, ACK", "ACK, SYN, FIN" ],
    correctAnswer: 2,
    explanation: "The TCP three-way handshake is the process used to establish a connection. It involves the client sending a SYN (synchronize) packet, the server responding with a SYN-ACK (synchronize-acknowledgment) packet, and the client replying with an ACK (acknowledgment) packet."
  },
  {
    id: 28,
    question: "What is the purpose of NAT (Network Address Translation)?",
    options: [
        "To encrypt all network traffic",
        "To allow multiple devices on a local network to share a single public IP address",
        "To assign domain names to IP addresses",
        "To block unauthorized access to a network"
    ],
    correctAnswer: 1,
    explanation: "NAT is a method used by routers to map multiple private IP addresses within a local network to a single public IP address before forwarding the traffic to the internet. This helps to conserve the limited number of IPv4 addresses."
  },
  {
    id: 29,
    question: "Which layer of the OSI model is responsible for formatting and encrypting data?",
    options: [ "Application Layer", "Session Layer", "Presentation Layer", "Transport Layer" ],
    correctAnswer: 2,
    explanation: "The Presentation Layer (Layer 6) is responsible for translating data between the application layer and the network format. This includes tasks such as data compression, encryption, and character set conversion."
  },
  {
    id: 30,
    question: "What is a 'socket' in computer networking?",
    options: [
        "A physical port on a router or switch",
        "The combination of an IP address and a port number",
        "A software application for network communication",
        "A type of network cable"
    ],
    correctAnswer: 1,
    explanation: "A socket is an endpoint for communication in a network. It is defined by the combination of an IP address and a port number, allowing multiple applications on a single machine to communicate over the network simultaneously."
  },
  {
    id: 31,
    question: "What is the primary purpose of ICMP (Internet Control Message Protocol)?",
    options: [
        "To transfer files between computers",
        "To send error messages and operational information about network conditions",
        "To provide secure, encrypted communication",
        "To manage the allocation of IP addresses"
    ],
    correctAnswer: 1,
    explanation: "ICMP is a network layer protocol used by network devices, like routers, to send error messages and operational information. For example, if a router cannot deliver a packet, it will use ICMP to inform the source. The ping utility also uses ICMP."
  },
  {
    id: 32,
    question: "Which of the following is true about IPv6 addresses?",
    options: [
        "They are 32 bits long",
        "They are represented in decimal format",
        "They offer a much larger address space than IPv4",
        "They are less secure than IPv4 addresses"
    ],
    correctAnswer: 2,
    explanation: "IPv6 addresses are 128 bits long, compared to the 32-bit addresses of IPv4. This provides for a vastly larger number of unique IP addresses, addressing the issue of IPv4 address exhaustion."
  },
  {
    id: 33,
    question: "What is the role of a default gateway?",
    options: [
        "To provide a default DNS server for a network",
        "To act as a central point for all devices on a local network",
        "To provide a path for data to travel to a remote network",
        "To assign private IP addresses to devices"
    ],
    correctAnswer: 2,
    explanation: "A default gateway is the router that devices on a local network use to send data to devices on other networks, including the internet. When a device needs to send a packet to an IP address that is not on its local network, it sends it to the default gateway."
  },
  {
    id: 34,
    question: "What is QoS (Quality of Service) in networking?",
    options: [
        "The total amount of data that can be transferred in a given time",
        "The process of encrypting network traffic",
        "A set of technologies for managing network resources to prioritize certain types of traffic",
        "The physical layout of a network"
    ],
    correctAnswer: 2,
    explanation: "QoS refers to the ability of a network to provide better service to selected network traffic over various technologies. This is often used to prioritize real-time traffic like voice and video over less time-sensitive traffic like email or file transfers."
  },
  {
    id: 35,
    question: "What is the main difference between a LAN and a WAN?",
    options: [
        "LANs are wireless, while WANs are wired",
        "LANs are more secure than WANs",
        "LANs cover a small geographical area, while WANs cover a large geographical area",
        "LANs use routers, while WANs use switches"
    ],
    correctAnswer: 2,
    explanation: "A LAN (Local Area Network) connects devices within a limited area such as a home or office building. A WAN (Wide Area Network) connects devices over a much larger geographical area, such as a city, country, or even the entire globe. The internet is the largest WAN."
  },
  {
    id: 36,
    question: "Which network device operates at Layer 2 (Data Link Layer) of the OSI model?",
    options: [ "Hub", "Router", "Switch", "Repeater" ],
    correctAnswer: 2,
    explanation: "A switch operates at the Data Link Layer and uses MAC addresses to forward data to the correct destination port. A hub and repeater operate at Layer 1 (Physical Layer), and a router operates at Layer 3 (Network Layer)."
  },
  {
    id: 37,
    question: "What is the purpose of the Session Layer in the OSI model?",
    options: [
        "To handle the physical transmission of data",
        "To manage and terminate connections between applications",
        "To route data packets",
        "To provide an interface for the user's application"
    ],
    correctAnswer: 1,
    explanation: "The Session Layer (Layer 5) is responsible for establishing, managing, and terminating sessions between two communicating hosts. It handles things like dialogue control and synchronization."
  },
  {
    id: 38,
    question: "What is FTP (File Transfer Protocol) used for?",
    options: [
        "Sending and receiving emails",
        "Browsing websites",
        "Transferring files between a client and a server on a computer network",
        "Securely logging into a remote computer"
    ],
    correctAnswer: 2,
    explanation: "FTP is an application layer protocol used for the transfer of computer files between a client and server on a computer network."
  },
  {
    id: 39,
    question: "What is a 'port' in the context of networking?",
    options: [
        "A physical connection point on a network device",
        "A logical endpoint for a specific process or service on a host",
        "A type of network cable",
        "The address of a website"
    ],
    correctAnswer: 1,
    explanation: "In TCP/IP networking, a port is a number that identifies a specific application or service running on a computer. This allows a single host to provide multiple services. For example, a web server might use port 80 for HTTP and port 443 for HTTPS."
  },
  {
    id: 40,
    question: "What is a 'packet' in networking?",
    options: [
        "A physical network device",
        "A formatted unit of data carried by a packet-switched network",
        "A measure of network speed",
        "A type of network topology"
    ],
    correctAnswer: 1,
    explanation: "A packet is a small segment of a larger message. Data sent over computer networks is broken down into packets, which are then reassembled at the destination. Each packet contains a portion of the user's data and control information like the source and destination IP addresses."
  },
  {
    id: 41,
    question: "What is the loopback IP address?",
    options: [ "0.0.0.0", "255.255.255.255", "127.0.0.1", "192.168.1.1" ],
    correctAnswer: 2,
    explanation: "The IP address 127.0.0.1 is the loopback address, also known as 'localhost.' When a device sends a packet to this address, it is communicating with itself. This is often used for testing network software without sending information over a physical network."
  },
  {
    id: 42,
    question: "Which wireless security protocol is considered the most secure?",
    options: [ "WEP", "WPA", "WPA2", "WPA3" ],
    correctAnswer: 3,
    explanation: "WPA3 (Wi-Fi Protected Access 3) is the latest and most secure wireless encryption protocol. It offers stronger encryption and better protection against attacks compared to its predecessors, WEP, WPA, and WPA2."
  },
  {
    id: 43,
    question: "What is the primary difference between a public IP address and a private IP address?",
    options: [
        "Public IP addresses are static, while private IP addresses are dynamic",
        "Public IP addresses are routable on the internet, while private IP addresses are not",
        "Public IP addresses are assigned by a DHCP server, while private IP addresses are manually configured",
        "Public IP addresses are IPv6, while private IP addresses are IPv4"
    ],
    correctAnswer: 1,
    explanation: "A public IP address is a unique address that is assigned to a device by an Internet Service Provider (ISP) and is used to communicate on the public internet. A private IP address is used within a local network and is not directly accessible from the internet."
  },
  {
    id: 44,
    question: "What is a 'botnet'?",
    options: [
        "A type of computer virus",
        "A network of private computers infected with malicious software and controlled as a group without the owners' knowledge",
        "A secure, encrypted network",
        "A type of network firewall"
    ],
    correctAnswer: 1,
    explanation: "A botnet is a collection of internet-connected devices, which may include PCs, servers, mobile devices, and IoT devices, that are infected and controlled by a common type of malware. They are often used to carry out distributed denial-of-service (DDoS) attacks, send spam, and steal data."
  },
  {
    id: 45,
    question: "What is the purpose of the 'traceroute' (or tracert) command?",
    options: [
        "To measure the bandwidth of a network connection",
        "To display the path and measure transit delays of packets across an IP network",
        "To show the IP configuration of a device",
        "To test for open ports on a remote host"
    ],
    correctAnswer: 1,
    explanation: "The traceroute command is a network diagnostic tool that displays the routing path and measures the transit delays of packets across an IP network. It can help identify where network slowdowns or failures are occurring."
  },
  {
    id: 46,
    question: "Which of the following is a characteristic of a peer-to-peer (P2P) network?",
    options: [
        "All devices are connected to a central server",
        "It is more secure than a client-server network",
        "Each device can act as both a client and a server",
        "It is primarily used for hosting websites"
    ],
    correctAnswer: 2,
    explanation: "In a peer-to-peer network, there is no central server. All the computers on the network are equal and can share resources directly with each other."
  },
  {
    id: 47,
    question: "What is APIPA (Automatic Private IP Addressing)?",
    options: [
        "A protocol for secure file transfer",
        "A feature that allows a device to automatically assign itself an IP address when a DHCP server is not available",
        "A method for encrypting wireless network traffic",
        "A type of network firewall"
    ],
    correctAnswer: 1,
    explanation: "APIPA is a feature of some operating systems that allows a device to automatically assign itself an IP address from the range 169.254.0.1 to 169.254.255.254 if a DHCP server is not available. This allows for communication on a local network without a DHCP server."
  },
  {
    id: 48,
    question: "What is the primary function of the Data Link Layer?",
    options: [
        "To provide a user interface",
        "To route packets between networks",
        "To provide reliable node-to-node data transfer",
        "To transmit bits over a physical medium"
    ],
    correctAnswer: 2,
    explanation: "The Data Link Layer (Layer 2) is responsible for the transfer of data between adjacent network nodes in a wide area network or between nodes on the same local area network segment. It deals with things like framing, physical addressing (MAC addresses), and error detection."
  },
  {
    id: 49,
    question: "What is a 'cookie' in the context of web browsing?",
    options: [
        "A small piece of data sent from a website and stored on the user's computer by the user's web browser",
        "A type of malware that infects a user's browser",
        "A script that runs on a web page to provide dynamic content",
        "A cached version of a website"
    ],
    correctAnswer: 0,
    explanation: "Cookies are small text files that websites store on a user's computer to remember information about them, such as their login status, shopping cart items, and preferences."
  },
  {
    id: 50,
    question: "What is a DDoS (Distributed Denial of Service) attack?",
    options: [
        "An attempt to steal sensitive information by impersonating a trustworthy entity",
        "An attack that uses a single computer to flood a server with traffic",
        "An attack in which multiple compromised computer systems attack a target, such as a server, website or other network resource, and cause a denial of service for users of the targeted resource",
        "An attack that exploits a vulnerability in a website's code to inject malicious scripts"
    ],
    correctAnswer: 2,
    explanation: "In a DDoS attack, the incoming traffic flooding the victim originates from many different sources, making it difficult to stop the attack simply by blocking a single IP address. The goal is to overwhelm the target's resources and make it unavailable to legitimate users."
  },

   {
    id: 51,
    question: "What is the primary purpose of SSH (Secure Shell)?",
    options: [
      "To transfer files between computers",
      "To browse websites securely",
      "To provide a secure channel over an unsecured network for remote command-line login and other network services",
      "To resolve domain names into IP addresses"
    ],
    correctAnswer: 2,
    explanation: "SSH is a cryptographic network protocol that allows two computers to communicate and share data securely over an unsecured network, such as the internet. It is commonly used by network administrators to manage systems and applications remotely."
  },
  {
    id: 52,
    question: "In CIDR notation, what does /24 represent in the IP address 192.168.1.0/24?",
    options: [
      "The number of available hosts on the network",
      "The subnet mask, indicating the first 24 bits are for the network address",
      "The version of the IP protocol",
      "The physical address of the gateway"
    ],
    correctAnswer: 1,
    explanation: "Classless Inter-Domain Routing (CIDR) notation is a compact way to represent a subnet mask. The number after the slash (/) indicates how many bits of the IP address are used for the network portion. A /24 corresponds to a subnet mask of 255.255.255.0."
  },
  {
    id: 53,
    question: "What is a load balancer used for?",
    options: [
      "To increase the bandwidth of a single server",
      "To distribute incoming network traffic across multiple servers",
      "To encrypt network traffic",
      "To cache website content"
    ],
    correctAnswer: 1,
    explanation: "A load balancer acts as a reverse proxy and distributes network or application traffic across a number of servers. This is done to increase capacity (concurrent users) and reliability of applications."
  },
  {
    id: 54,
    question: "Which HTTP method is idempotent and used to create or replace a resource?",
    options: [ "GET", "POST", "PUT", "DELETE" ],
    correctAnswer: 2,
    explanation: "An HTTP method is idempotent if an identical request can be made once or several times in a row with the same effect. The PUT method is used to create a new resource or replace a representation of the target resource with the request payload. Sending the same PUT request multiple times will have the same effect as sending it once."
  },
  {
    id: 55,
    question: "What is the function of a Network Interface Card (NIC)?",
    options: [
      "To route traffic between different networks",
      "To provide a dedicated, physical connection to a network",
      "To manage the IP address allocation",
      "To filter unwanted network traffic"
    ],
    correctAnswer: 1,
    explanation: "A NIC is a hardware component, typically a circuit board or chip, installed in a computer so that it can connect to a network. It provides the physical link to the network and, for Layer 2, a MAC address."
  },
  {
    id: 56,
    question: "What is the main difference between a bridge and a router?",
    options: [
      "A bridge operates at the Network Layer, while a router operates at the Data Link Layer",
      "A bridge connects similar networks, while a router connects dissimilar networks",
      "A bridge forwards data based on MAC addresses, while a router forwards data based on IP addresses",
      "A bridge is a software component, while a router is a hardware device"
    ],
    correctAnswer: 2,
    explanation: "A bridge operates at Layer 2 (Data Link) and is used to connect two or more LAN segments, making decisions based on MAC addresses. A router operates at Layer 3 (Network) and connects different networks together, making routing decisions based on IP addresses."
  },
  {
    id: 57,
    question: "What does the TTL (Time to Live) field in an IP packet signify?",
    options: [
      "The time it takes for a packet to reach its destination",
      "A limit on the number of routers (hops) a packet can pass through before being discarded",
      "The time for which a DNS record is valid",
      "The total lifetime of a network connection"
    ],
    correctAnswer: 1,
    explanation: "TTL is a mechanism that limits the lifespan of data in a computer network. It is an 8-bit field in the IP header. The TTL value is decremented by one by each router that forwards the packet, and if it reaches zero, the packet is discarded. This prevents packets from circulating indefinitely."
  },
  {
    id: 58,
    question: "Which of these protocols operates at the Transport Layer?",
    options: [ "IP", "HTTP", "UDP", "ARP" ],
    correctAnswer: 2,
    explanation: "The Transport Layer is responsible for end-to-end communication. The two primary protocols at this layer are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). IP and ARP operate at the Network/Internet Layer, and HTTP operates at the Application Layer."
  },
  {
    id: 59,
    question: "What is the purpose of a digital certificate in HTTPS?",
    options: [
      "To encrypt the data being transmitted",
      "To verify the identity of the web server and establish a secure connection",
      "To cache the website's content",
      "To assign a public IP address to the web server"
    ],
    correctAnswer: 1,
    explanation: "A digital certificate, specifically an SSL/TLS certificate, is a data file that cryptographically links an organization's identity to a public key. It is used in HTTPS to authenticate the server to the client (the browser), ensuring the user is communicating with the legitimate website and not an imposter."
  },
  {
    id: 60,
    question: "What is 'packet sniffing'?",
    options: [
      "The act of repairing corrupted data packets",
      "The process of routing packets through the most efficient path",
      "The interception and logging of traffic passing over a digital network",
      "The process of encrypting data packets for security"
    ],
    correctAnswer: 2,
    explanation: "Packet sniffing involves capturing data packets as they flow across a network. It can be used for legitimate network troubleshooting or for malicious purposes, such as stealing unencrypted data like passwords and usernames."
  },
  {
    id: 61,
    question: "What is the primary function of the BGP (Border Gateway Protocol)?",
    options: [
      "To exchange routing information between autonomous systems on the internet",
      "To manage traffic within a single local area network",
      "To assign IP addresses to devices",
      "To provide secure, encrypted communication between two hosts"
    ],
    correctAnswer: 0,
    explanation: "BGP is the routing protocol that makes the internet work. It manages how packets are routed from one network to another by exchanging routing and reachability information among different Autonomous Systems (AS)."
  },
  {
    id: 62,
    question: "In networking, what is a 'gateway'?",
    options: [
      "A device that filters malicious traffic",
      "A node on a network that serves as an entry point to another network",
      "A device that boosts a wireless signal",
      "A central connection point for all devices on a network"
    ],
    correctAnswer: 1,
    explanation: "A gateway is a piece of networking hardware or software that connects two different networks, allowing data to be passed between them. A router is a common example of a gateway."
  },
  {
    id: 63,
    question: "What is the main purpose of flow control in TCP?",
    options: [
      "To ensure packets arrive in the correct order",
      "To prevent the sender from overwhelming the receiver with too much data",
      "To determine the fastest route for data transmission",
      "To encrypt the data stream"
    ],
    correctAnswer: 1,
    explanation: "TCP uses a sliding window mechanism for flow control. The receiver specifies the amount of data it is willing to accept (the window size), and the sender can only send up to that amount before receiving an acknowledgment and an updated window size. This prevents buffer overflow at the receiver's end."
  },
  {
    id: 64,
    question: "Which of the following describes a full mesh topology?",
    options: [
      "All devices are connected to a central hub",
      "All devices are connected in a circular chain",
      "Every device is directly connected to every other device on the network",
      "Devices are connected along a single backbone cable"
    ],
    correctAnswer: 2,
    explanation: "In a full mesh topology, each node (workstation or other device) is connected directly to each of the others. This provides a high level of redundancy but is expensive and complex to implement, especially in large networks."
  },
  {
    id: 65,
    question: "What is the role of a Certificate Authority (CA)?",
    options: [
      "To create encryption keys for secure communication",
      "To issue digital certificates that verify the identity of entities",
      "To monitor network traffic for malicious activity",
      "To manage the allocation of domain names"
    ],
    correctAnswer: 1,
    explanation: "A Certificate Authority is a trusted third-party organization that issues digital certificates. It verifies the identity of the certificate applicant before issuing it, which helps create a chain of trust for secure communication on the internet."
  },
  {
    id: 66,
    question: "What is the difference between latency and throughput?",
    options: [
      "Latency is the delay, while throughput is the rate of data transfer",
      "Latency is measured in bps, while throughput is measured in milliseconds",
      "Latency affects wired networks, while throughput affects wireless networks",
      "There is no difference; they are the same thing"
    ],
    correctAnswer: 0,
    explanation: "Latency is the time it takes for a packet of data to get from one point to another (the delay). Throughput is the amount of data that can be successfully transferred from one point to another in a given period of time (the rate)."
  },
  {
    id: 67,
    question: "What is an Autonomous System (AS) in the context of the internet?",
    options: [
      "A single computer connected to the internet",
      "A collection of connected IP routing prefixes under the control of one or more network operators",
      "A type of secure private network",
      "A software application for managing network devices"
    ],
    correctAnswer: 1,
    explanation: "An Autonomous System is a large network or a group of networks that has a unified routing policy. Each AS is assigned a unique number, an ASN (Autonomous System Number). The internet is essentially a collection of interconnected ASes."
  },
  {
    id: 68,
    question: "Which protocol is responsible for synchronizing clocks between computer systems over a network?",
    options: [ "SMTP", "SNMP", "NTP", "FTP" ],
    correctAnswer: 2,
    explanation: "NTP (Network Time Protocol) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks. It is crucial for many distributed systems and security protocols that rely on accurate timestamps."
  },
  {
    id: 69,
    question: "What does the ACK flag in a TCP header signify?",
    options: [
      "It initiates a new connection",
      "It terminates the connection",
      "It acknowledges the successful receipt of a packet",
      "It indicates that the data is urgent"
    ],
    correctAnswer: 2,
    explanation: "The ACK (Acknowledgment) flag is used in TCP to indicate that the acknowledgment number field in the header is significant. It is used by the receiver to inform the sender that it has successfully received a packet."
  },
  {
    id: 70,
    question: "What is a 'promiscuous mode' on a network interface card?",
    options: [
      "A mode that increases the speed of the network connection",
      "A mode that allows the NIC to pass all traffic it receives to the CPU, not just the frames addressed to it",
      "A low-power mode to save energy",
      "A secure mode that encrypts all traffic"
    ],
    correctAnswer: 1,
    explanation: "In normal mode, a NIC only accepts packets addressed to its MAC address. In promiscuous mode, it accepts all packets, regardless of the destination MAC address. This mode is used by packet sniffing applications like Wireshark."
  },
  {
    id: 71,
    question: "What is the primary difference between IMAP and POP3 for retrieving emails?",
    options: [
      "POP3 is more secure than IMAP",
      "IMAP synchronizes emails across multiple devices, while POP3 typically downloads and deletes them from the server",
      "IMAP is used for sending emails, while POP3 is for receiving",
      "POP3 is a newer protocol than IMAP"
    ],
    correctAnswer: 1,
    explanation: "IMAP (Internet Message Access Protocol) stores emails on the server and synchronizes them across all clients. This allows users to access their emails from different devices. POP3 (Post Office Protocol 3) generally downloads the emails to a single client and then deletes them from the server, making it less suitable for multi-device access."
  },
  {
    id: 72,
    question: "What is IPsec (Internet Protocol Security)?",
    options: [
      "A protocol for assigning IP addresses",
      "A secure version of the HTTP protocol",
      "A framework of open standards for ensuring private, secure communications over IP networks",
      "A tool for monitoring network performance"
    ],
    correctAnswer: 2,
    explanation: "IPsec is a suite of protocols that provides security for internet communications at the IP layer. It can be used for creating VPNs, and it provides security services like data confidentiality, data integrity, and authentication."
  },
  {
    id: 73,
    question: "Which of the following is an example of an Interior Gateway Protocol (IGP)?",
    options: [ "BGP", "OSPF", "FTP", "DNS" ],
    correctAnswer: 1,
    explanation: "IGPs are routing protocols used to exchange routing information within a single Autonomous System (AS). Examples include OSPF (Open Shortest Path First) and EIGRP. BGP is an Exterior Gateway Protocol (EGP), used for routing between different ASes."
  },
  {
    id: 74,
    question: "What is multiplexing in networking?",
    options: [
      "The process of breaking down large data chunks into smaller packets",
      "The process of combining multiple signals or data streams into a single channel for transmission",
      "The process of encrypting data for secure transport",
      "The process of resolving domain names to IP addresses"
    ],
    correctAnswer: 1,
    explanation: "Multiplexing allows several communication streams to share a single communication medium. For example, the Transport Layer can handle multiple application streams (e.g., from a browser and an email client) and pass their data down to the single IP stream at the Network Layer."
  },
  {
    id: 75,
    question: "In the context of a browser, what is the 'Same-Origin Policy'?",
    options: [
      "A policy that allows a website to load resources only from its own domain",
      "A security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin",
      "A policy that ensures all content on a website is served over HTTPS",
      "A rule that dictates how cookies are stored by the browser"
    ],
    correctAnswer: 1,
    explanation: "The Same-Origin Policy is a critical security concept implemented in web browsers. It prevents a malicious script on one page from obtaining sensitive data on another web page through that page's Document Object Model (DOM). An 'origin' is defined by the combination of protocol, hostname, and port number."
  },
  {
    id: 76,
    question: "What is the function of the netstat command?",
    options: [
      "To display the routing table",
      "To test connectivity to a remote host",
      "To display active network connections, routing tables, and various network interface statistics",
      "To configure the IP address of a network interface"
    ],
    correctAnswer: 2,
    explanation: "netstat (network statistics) is a command-line tool that provides information about network connections, including which ports are open and which applications are using them."
  },
  {
    id: 77,
    question: "What is a collision domain?",
    options: [
      "The geographical area covered by a wireless network",
      "A section of a network where data packets can collide with one another when being sent on a shared medium",
      "A network of computers infected with malware",
      "The set of all devices that receive broadcast frames originating from any device in the set"
    ],
    correctAnswer: 1,
    explanation: "A collision domain is a network segment where simultaneous transmissions will result in a collision. Hubs operate in a single collision domain. Switches create separate collision domains for each port, which eliminates collisions."
  },
  {
    id: 78,
    question: "What is a broadcast domain?",
    options: [
      "A network segment where devices can communicate directly without a router",
      "The logical division of a computer network, in which all nodes can reach each other by broadcast at the data link layer",
      "The path a packet takes from source to destination",
      "A network segment where packet collisions can occur"
    ],
    correctAnswer: 1,
    explanation: "A broadcast domain is the set of all devices that will receive a broadcast frame sent by any one of them. Routers are used to separate broadcast domains."
  },
  {
    id: 79,
    question: "What is the primary purpose of the SSL/TLS handshake?",
    options: [
      "To transfer the actual website data",
      "For the client and server to authenticate each other and to negotiate the encryption algorithm and cryptographic keys to be used",
      "To close a secure connection gracefully",
      "To check for network connectivity between the client and server"
    ],
    correctAnswer: 1,
    explanation: "The SSL/TLS handshake is a process that takes place at the beginning of an HTTPS connection. During the handshake, the client and server agree upon the protocol version, select cryptographic algorithms, optionally authenticate each other, and use asymmetric encryption to generate shared secret keys."
  },
  {
    id: 80,
    question: "What is an API (Application Programming Interface) in the context of networking?",
    options: [
      "A physical network connection port",
      "A set of rules and tools for building software and applications that specifies how software components should interact",
      "A protocol for secure remote login",
      "A hardware device for managing network traffic"
    ],
    correctAnswer: 1,
    explanation: "In networking, APIs (like REST APIs) allow different applications to communicate with each other over a network, typically the internet. For example, a web application might use a third-party API to get weather data or process payments."
  },
  {
    id: 81,
    question: "Which HTTP status code indicates a successful request?",
    options: [ "200 OK", "301 Moved Permanently", "403 Forbidden", "500 Internal Server Error" ],
    correctAnswer: 0,
    explanation: "The 2xx class of HTTP status codes indicates that the client's request was successfully received, understood, and accepted. 200 OK is the standard response for successful HTTP requests."
  },
  {
    id: 82,
    question: "What is the purpose of a VLAN (Virtual LAN)?",
    options: [
      "To increase the physical speed of a LAN",
      "To create a logical broadcast domain that can span multiple physical LAN segments",
      "To provide a wireless connection to a LAN",
      "To connect two different WANs together"
    ],
    correctAnswer: 1,
    explanation: "A VLAN allows a network administrator to logically segment a LAN into different broadcast domains. This can improve performance by reducing broadcast traffic and enhance security by isolating groups of users, even if they are physically connected to the same switch."
  },
  {
    id: 83,
    question: "What is MTU (Maximum Transmission Unit)?",
    options: [
      "The maximum number of users that can connect to a network",
      "The maximum size of a packet that can be transmitted in a network",
      "The minimum time it takes for a packet to travel across a network",
      "The maximum upload speed of a network connection"
    ],
    correctAnswer: 1,
    explanation: "MTU specifies the largest size packet or frame, in bytes, that can be sent in a packet- or frame-based network. If a packet is larger than the MTU of a link, it must be fragmented into smaller pieces, which can decrease efficiency."
  },
  {
    id: 84,
    question: "What is the difference between Symmetric and Asymmetric encryption?",
    options: [
      "Symmetric encryption is faster but less secure than asymmetric encryption",
      "Symmetric encryption uses a single key for both encryption and decryption, while asymmetric uses a pair of keys (public and private)",
      "Symmetric encryption is used for HTTPS, while asymmetric is used for VPNs",
      "Symmetric encryption can only be done in hardware, while asymmetric can be done in software"
    ],
    correctAnswer: 1,
    explanation: "In symmetric-key cryptography, the same key is used to encrypt and decrypt the data. In asymmetric (or public-key) cryptography, a public key is used to encrypt data, and a different but mathematically related private key is used to decrypt it."
  },
  {
    id: 85,
    question: "Which DNS record type is used to map a domain name to an IPv4 address?",
    options: [ "AAAA", "CNAME", "MX", "A" ],
    correctAnswer: 3,
    explanation: "An A record (Address record) is the most basic type of DNS record. It points a domain or subdomain to an IPv4 address. An AAAA record points to an IPv6 address, CNAME is for an alias, and MX is for mail exchange servers."
  },
  {
    id: 86,
    question: "What is a 'Man-in-the-Middle' (MITM) attack?",
    options: [
      "An attack that floods a server with traffic to make it unavailable",
      "An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other",
      "An attack that tries to guess a user's password",
      "An attack that infects a computer with a virus"
    ],
    correctAnswer: 1,
    explanation: "A MITM attack is a form of eavesdropping where an attacker intercepts a communication channel between two systems. This allows the attacker to read, insert, and modify the data in the intercepted communication. HTTPS is designed to prevent such attacks."
  },
  {
    id: 87,
    question: "What is the function of a repeater?",
    options: [
      "To store and forward data packets to their destination",
      "To regenerate and amplify a network signal to extend the distance it can travel",
      "To filter network traffic based on security rules",
      "To connect two different types of networks"
    ],
    correctAnswer: 1,
    explanation: "A repeater is a network device that operates at the Physical Layer (Layer 1) of the OSI model. Its job is to receive a signal, clean it of unnecessary noise, regenerate it, and retransmit it at a higher power level so it can cover longer distances without degradation."
  },
  {
    id: 88,
    question: "What is the primary advantage of packet switching over circuit switching?",
    options: [
      "Packet switching has lower latency",
      "Packet switching provides a dedicated connection path",
      "Packet switching is more efficient in its use of network bandwidth",
      "Packet switching is less complex to implement"
    ],
    correctAnswer: 2,
    explanation: "In circuit switching (used in traditional phone networks), a dedicated circuit is established for the duration of a communication. In packet switching, the network bandwidth is shared among multiple users, and data is sent in small packets. This is more efficient because the communication channel is not idle when one user is not actively sending data."
  },
  {
    id: 89,
    question: "In the context of web development, what is AJAX?",
    options: [
      "A programming language for creating web pages",
      "A type of web server software",
      "A set of web development techniques that allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes",
      "A security protocol for web applications"
    ],
    correctAnswer: 2,
    explanation: "AJAX (Asynchronous JavaScript and XML) allows parts of a web page to be updated without having to reload the entire page. This makes web applications more responsive and interactive."
  },
  {
    id: 90,
    question: "What is a MAC address table on a switch?",
    options: [
      "A list of all IP addresses connected to the switch",
      "A table that maps MAC addresses to the switch ports they are connected to",
      "A routing table used to forward packets between different networks",
      "A list of blocked MAC addresses for security"
    ],
    correctAnswer: 1,
    explanation: "A network switch builds a MAC address table (also called a CAM table) by inspecting the source MAC address of incoming frames. When it needs to forward a frame to a specific destination MAC address, it looks up the corresponding port in the table and sends the frame only to that port, rather than broadcasting it to all ports like a hub."
  },
  {
    id: 91,
    question: "Which of the following is a characteristic of fiber optic cables?",
    options: [
      "They are highly susceptible to electromagnetic interference",
      "They transmit data using electrical signals",
      "They offer higher bandwidth and can transmit data over longer distances than copper cables",
      "They are less expensive and easier to install than twisted-pair copper cables"
    ],
    correctAnswer: 2,
    explanation: "Fiber optic cables transmit data as pulses of light through thin strands of glass or plastic. This technology allows for much higher data rates and is immune to electromagnetic interference, making it superior to traditional copper cabling for high-performance networking."
  },
  {
    id: 92,
    question: "What is a bastion host?",
    options: [
      "A database server that stores sensitive information",
      "The primary domain controller in a network",
      "A specially secured computer system on a network specifically designed and configured to withstand attacks",
      "A computer that is not connected to any network"
    ],
    correctAnswer: 2,
    explanation: "A bastion host is a hardened computer that is placed on a network in a way that it is exposed to attack, such as in a DMZ. It is the only host that is accessible from the public internet and serves as a gateway to the internal network."
  },
  {
    id: 93,
    question: "What is a key difference between HTTP/1.1 and HTTP/2?",
    options: [
      "HTTP/2 is less secure than HTTP/1.1",
      "HTTP/1.1 uses a text-based protocol, while HTTP/2 is binary",
      "HTTP/2 allows for multiplexing, sending multiple requests and responses over a single TCP connection simultaneously",
      "HTTP/2 does not use cookies"
    ],
    correctAnswer: 2,
    explanation: "HTTP/1.1 suffers from 'head-of-line blocking,' where only one request can be outstanding on a connection at a time. HTTP/2 introduces multiplexing, which allows multiple request/response messages to be in flight at the same time on the same connection, significantly improving page load speed."
  },
  {
    id: 94,
    question: "What is the nslookup command used for?",
    options: [
      "To display the routing table",
      "To query the Domain Name System (DNS) to obtain domain name or IP address mapping",
      "To measure the latency to a remote host",
      "To display active network connections"
    ],
    correctAnswer: 1,
    explanation: "nslookup is a network administration command-line tool available for many computer operating systems for querying the DNS to find the IP address associated with a domain name, and vice versa."
  },
  {
    id: 95,
    question: "What is a socket exhaustion attack?",
    options: [
      "An attack that physically removes network sockets from a device",
      "A denial-of-service attack that consumes all available sockets on a server, preventing legitimate users from connecting",
      "An attack that steals data by listening on a network socket",
      "An attack that exploits a vulnerability in the socket programming API"
    ],
    correctAnswer: 1,
    explanation: "Every network connection on a server uses a socket. A socket exhaustion attack involves an attacker opening a large number of connections to a server and keeping them open, thereby using up all the available sockets and preventing new, legitimate connections from being established."
  },
  {
    id: 96,
    question: "What is the function of the 'window size' field in a TCP header?",
    options: [
      "It specifies the number of packets to be sent",
      "It specifies the amount of data (in bytes) that the sender of the segment is willing to receive",
      "It defines the priority of the TCP segment",
      "It indicates the total size of the TCP segment"
    ],
    correctAnswer: 1,
    explanation: "The TCP window size field is used for flow control. The receiver of data uses this field to tell the sender how much buffer space it has available for incoming data. The sender should not send more data than the advertised window size."
  },
  {
    id: 97,
    question: "Which of the following is a non-routable protocol?",
    options: [ "IP", "IPX", "NetBEUI", "AppleTalk" ],
    correctAnswer: 2,
    explanation: "NetBEUI (NetBIOS Extended User Interface) is a legacy protocol used in early Microsoft networking. It is considered non-routable because it does not have a network layer and relies on MAC address broadcasts for communication, making it suitable only for small, single-segment LANs."
  },
  {
    id: 98,
    question: "What is a honeypot in network security?",
    options: [
      "A server that stores sensitive user passwords",
      "A security mechanism intended to trap or decoy attackers",
      "An encrypted file containing cryptographic keys",
      "A software tool for detecting viruses"
    ],
    correctAnswer: 1,
    explanation: "A honeypot is a system or network resource that is set up to be a target for attackers. It is designed to be probed, attacked, and compromised, allowing security administrators to study the attackers' methods and gather intelligence without exposing their real production systems."
  },
  {
    id: 99,
    question: "What is the purpose of the FIN flag in a TCP segment?",
    options: [
      "To initiate a connection",
      "To reset a connection",
      "To indicate that the sender has finished sending data",
      "To acknowledge received data"
    ],
    correctAnswer: 2,
    explanation: "The FIN (Finish) flag is used in TCP to gracefully terminate a connection. When a device is done sending data, it sends a segment with the FIN flag set. The other end acknowledges this and then sends its own FIN segment to close its side of the connection."
  },
  {
    id: 100,
    question: "What is Anycast addressing?",
    options: [
      "Sending a packet to all devices on a network",
      "Sending a packet to a specific group of devices",
      "A network addressing and routing methodology in which a single destination address is shared by devices in multiple locations",
      "Sending a packet to a single, specific device"
    ],
    correctAnswer: 2,
    explanation: "Anycast allows a single IP address to be associated with multiple servers. When a client sends a request to an anycast address, routers direct it to the server that is topologically 'closest' or has the best performance. This is commonly used by CDNs and DNS root servers to improve response times and provide redundancy."
  },

  {
    id: 101,
    question: "What is the primary advantage of the WebSocket protocol over traditional HTTP for real-time applications?",
    options: [
      "Stronger encryption",
      "Lower latency through a persistent, full-duplex connection",
      "Better caching mechanisms",
      "Simpler API"
    ],
    correctAnswer: 1,
    explanation: "WebSockets establish a single, long-lived TCP connection that allows for bi-directional (full-duplex) communication between the client and server. This avoids the overhead of establishing new HTTP connections for each message, making it ideal for applications like chat, online gaming, and live data feeds."
  },
  {
    id: 102,
    question: "What is a key feature of the QUIC protocol, which is the foundation for HTTP/3?",
    options: [
      "It runs exclusively over TCP",
      "It eliminates head-of-line blocking at the transport layer",
      "It is a text-based protocol for easy debugging",
      "It is designed for low-bandwidth networks only"
    ],
    correctAnswer: 1,
    explanation: "QUIC is built on top of UDP. It implements its own stream-multiplexing feature. If a packet for one stream is lost, it does not block the delivery of packets for other streams. This is a major improvement over TCP, where a single lost packet can hold up all streams in an HTTP/2 connection (TCP head-of-line blocking)."
  },
  {
    id: 103,
    question: "What happens when an IP packet is larger than the MTU of a network link it needs to cross?",
    options: [
      "The packet is discarded",
      "The packet is sent back to the source",
      "The router fragments the packet into smaller pieces",
      "The router compresses the packet"
    ],
    correctAnswer: 2,
    explanation: "If a router receives a packet that is too large for the outgoing interface's Maximum Transmission Unit (MTU), it will break the packet into smaller fragments. Each fragment is sent as a separate IP packet and is reassembled at the final destination host."
  },
  {
    id: 104,
    question: "What is the purpose of the 'slow start' algorithm in TCP congestion control?",
    options: [
      "To gradually increase the amount of data sent until the network's maximum capacity is found, preventing initial congestion",
      "To deliberately slow down the connection for security reasons",
      "To wait for the receiver to allocate buffer space",
      "To reduce the connection speed for mobile devices"
    ],
    correctAnswer: 0,
    explanation: "The TCP slow start algorithm begins a connection with a small congestion window (cwnd). It then exponentially increases the cwnd with each received acknowledgment (ACK), allowing it to quickly find the available bandwidth without immediately overwhelming the network."
  },
  {
    id: 105,
    question: "In a comparison of the OSI and TCP/IP models, the TCP/IP Application layer combines the functions of which OSI layers?",
    options: [
      "Application and Transport",
      "Presentation and Session",
      "Application, Presentation, and Session",
      "Network, Data Link, and Physical"
    ],
    correctAnswer: 2,
    explanation: "The TCP/IP model is a more practical, condensed model. Its Application Layer encompasses the responsibilities of the OSI model's Application (Layer 7), Presentation (Layer 6), and Session (Layer 5) layers."
  },
  {
    id: 106,
    question: "What is the key difference between an HTTP 301 Moved Permanently and 302 Found redirect for a browser or search engine?",
    options: [
      "301 is temporary, while 302 is permanent",
      "301 is for GET requests, 302 is for POST requests",
      "301 indicates a permanent redirect and search engines should update their index, while 302 is temporary",
      "302 is more secure than 301"
    ],
    correctAnswer: 2,
    explanation: "A 301 status code tells the client (and search engines) that the resource has moved for good, and they should use the new URL for all future requests. A 302 indicates a temporary move, so the client should continue to use the original URL in the future."
  },
  {
    id: 107,
    question: "What two addresses are contained in the header of an Ethernet frame?",
    options: [
      "Source IP and Destination IP",
      "Source Port and Destination Port",
      "Source MAC and Destination MAC",
      "Source URL and Destination URL"
    ],
    correctAnswer: 2,
    explanation: "Ethernet operates at Layer 2 (Data Link Layer), which uses physical MAC addresses for communication on a local network segment. The Ethernet frame header must contain the MAC address of the sending NIC and the MAC address of the receiving NIC."
  },
  {
    id: 108,
    question: "What is the primary purpose of Spanning Tree Protocol (STP) in a switched network?",
    options: [
      "To increase the speed of the network",
      "To prevent broadcast storms and logical loops in a network with redundant paths",
      "To encrypt traffic between switches",
      "To load balance traffic across multiple links"
    ],
    correctAnswer: 1,
    explanation: "Having redundant links between switches creates fault tolerance but also creates loops. STP is a protocol that detects these loops and logically blocks one of the redundant paths to create a single, loop-free path. This prevents frames from circulating indefinitely, which would cause a broadcast storm and crash the network."
  },
  {
    id: 109,
    question: "What is the primary use of the ifconfig (or ip addr) command-line tool?",
    options: [
      "To query DNS records",
      "To view and configure the network interfaces of a computer",
      "To trace the route to a remote host",
      "To display active network connections"
    ],
    correctAnswer: 1,
    explanation: "ifconfig (on older Unix-like systems) and ip addr (on modern Linux systems) are fundamental tools used to display current network interface settings (like IP address, subnet mask, and MAC address) and to modify them."
  },
  {
    id: 110,
    question: "What does a reverse DNS (rDNS) lookup do?",
    options: [
      "Finds all subdomains for a given domain",
      "Resolves a domain name to an IP address",
      "Finds the domain name associated with a given IP address",
      "Checks the expiration date of a domain"
    ],
    correctAnswer: 2,
    explanation: "A reverse DNS lookup is the opposite of a standard (forward) DNS lookup. It uses a special PTR (Pointer) record to query a DNS server for the hostname that corresponds to a particular IP address. Mail servers often use rDNS as a security check."
  },
  {
    id: 111,
    question: "Which of the following is a key constraint of a RESTful API architecture?",
    options: [
      "Stateful communication",
      "Tight coupling between client and server",
      "Statelessness",
      "Proprietary communication protocol"
    ],
    correctAnswer: 2,
    explanation: "A core principle of REST (Representational State Transfer) is that the server does not store any client context between requests. Each request from a client must contain all the information necessary for the server to fulfill that request. This improves scalability and reliability."
  },
  {
    id: 112,
    question: "What is the purpose of the Content-Type header in an HTTP response?",
    options: [
      "To specify the language of the content",
      "To indicate the size of the message body",
      "To indicate the media type of the resource (e.g., application/json, text/html)",
      "To specify the allowed HTTP methods"
    ],
    correctAnswer: 2,
    explanation: "This header tells the client what kind of data is being sent in the response body so it can process it correctly. For example, a browser will render a resource with Content-Type: text/html as a web page, but it might parse a resource with Content-Type: application/json in a JavaScript application."
  },
  {
    id: 113,
    question: "What is the main goal of TCP's Nagle's algorithm?",
    options: [
      "To increase the speed of TCP connections",
      "To reduce the number of small packets sent over the network by combining them",
      "To improve the security of TCP",
      "To guarantee packet delivery order"
    ],
    correctAnswer: 1,
    explanation: "Sending many small packets (e.g., from individual keystrokes) can be inefficient due to the overhead of TCP/IP headers. Nagle's algorithm improves efficiency by holding small amounts of outgoing data and sending them in a single larger packet once a sufficient amount is accumulated."
  },
  {
    id: 114,
    question: "How is the initial DHCP Discover message sent by a client looking for an IP address?",
    options: [
      "As a unicast to the DHCP server's IP",
      "As a multicast to a specific group",
      "As a broadcast to all devices on the local network segment",
      "As a unicast to the router's IP"
    ],
    correctAnswer: 2,
    explanation: "The client does not yet have an IP address and does not know the IP address of a DHCP server. Therefore, it sends a broadcast message with a destination MAC address of FF:FF:FF:FF:FF:FF to discover any available DHCP servers on its local network."
  },
  {
    id: 115,
    question: "What is the purpose of Cross-Origin Resource Sharing (CORS)?",
    options: [
      "To block all requests from different domains",
      "To allow web applications to make requests to domains other than their own, in a controlled way",
      "To encrypt data between different origins",
      "To cache resources from different origins"
    ],
    correctAnswer: 1,
    explanation: "The Same-Origin Policy is a security feature that, by default, prevents a web page from making AJAX requests to a different domain. CORS is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin access to selected resources from a different origin."
  },
  {
    id: 116,
    question: "What is port forwarding on a router?",
    options: [
      "Translating one IP address to another",
      "A security feature that blocks specific ports",
      "A technique that redirects a communication request from one address and port number combination to another",
      "A method for prioritizing traffic on specific ports"
    ],
    correctAnswer: 2,
    explanation: "Port forwarding is an application of NAT that allows an external device to connect to a service on a private network. A router is configured to listen for incoming traffic on a specific port and forward it to the internal IP address and port of a device on the LAN."
  },
  {
    id: 117,
    question: "What does the RST flag signify in a TCP segment?",
    options: [
      "The data is urgent",
      "Push the data to the application immediately",
      "Reset the connection immediately",
      "The connection is being closed gracefully"
    ],
    correctAnswer: 2,
    explanation: "The RST (Reset) flag is used to terminate a connection abruptly. This happens if a host receives a packet for a connection that does not exist or if a fatal error occurs. It is an abnormal termination, unlike the graceful close initiated by the FIN flag."
  },
  {
    id: 118,
    question: "In a /24 network (e.g., 192.168.1.0/24), what is the address 192.168.1.0 used for?",
    options: [
      "The first usable host address",
      "The broadcast address",
      "The network address itself",
      "The default gateway address"
    ],
    correctAnswer: 2,
    explanation: "In any IP subnet, the first address (where all host bits are set to zero) is reserved as the network address. It is used in routing tables to identify the network as a whole and cannot be assigned to an individual device."
  },
  {
    id: 119,
    question: "In that same network (192.168.1.0/24), what is the address 192.168.1.255 used for?",
    options: [
      "The last usable host address",
      "The network address",
      "The broadcast address",
      "The DNS server address"
    ],
    correctAnswer: 2,
    explanation: "The last address in a subnet (where all host bits are set to one) is the broadcast address. Packets sent to this address are delivered to all hosts within that specific subnet."
  },
  {
    id: 120,
    question: "What is SNMP (Simple Network Management Protocol) primarily used for?",
    options: [
      "Transferring large files",
      "Securely logging into remote devices",
      "Managing and monitoring network devices like routers, switches, and servers",
      "Synchronizing time across devices"
    ],
    correctAnswer: 2,
    explanation: "SNMP is an application-layer protocol used for network management. It allows a central management station to query devices for status information (like CPU usage, bandwidth), configure settings, and receive alerts (traps) about significant events."
  },
  {
    id: 121,
    question: "What does PoE (Power over Ethernet) technology enable?",
    options: [
      "A faster Ethernet connection",
      "Ethernet connections over power lines",
      "The ability to pass electrical power along with data on twisted-pair Ethernet cabling",
      "A more secure version of Ethernet"
    ],
    correctAnswer: 2,
    explanation: "PoE allows a single cable to provide both the network connection and the electrical power to devices. This is very useful for devices like wireless access points, IP cameras, and VoIP phones, as it eliminates the need for a separate power outlet."
  },
  {
    id: 122,
    question: "What is 'jitter' in the context of computer networks?",
    options: [
      "The total number of lost packets",
      "The variation in the delay of received packets",
      "The maximum bandwidth of a connection",
      "The time it takes to establish a connection"
    ],
    correctAnswer: 1,
    explanation: "In real-time applications like VoIP or video streaming, packets should ideally arrive at a constant rate. Jitter is the inconsistency in packet arrival times. High jitter can lead to poor quality, such as garbled audio or jerky video."
  },
  {
    id: 123,
    question: "What is the purpose of a DMZ (Demilitarized Zone) in a network?",
    options: [
      "A highly secure internal network for sensitive data",
      "A physical area where no electronic devices are allowed",
      "A perimeter network that exposes an organization's external-facing services to an untrusted network",
      "A protocol for secure military communication"
    ],
    correctAnswer: 2,
    explanation: "A DMZ is a small, isolated network positioned between the internet and a private internal network. It contains servers that need to be accessible from the internet (like web servers). This adds an extra layer of security because if a DMZ server is compromised, the attacker does not have direct access to the internal LAN."
  },
  {
    id: 124,
    question: "What does Round Trip Time (RTT) measure?",
    options: [
      "The speed of the network in Mbps",
      "The number of hops between two hosts",
      "The time it takes for a signal to be sent plus the time it takes for an acknowledgment to be received",
      "The maximum size of a data packet"
    ],
    correctAnswer: 2,
    explanation: "RTT is a primary measure of network latency. It is the total time for a packet to travel from a source to a destination and for a response to travel back to the source. The ping command is a common tool for measuring RTT."
  },
  {
    id: 125,
    question: "What is a key difference between a Proxy Server and a VPN?",
    options: [
      "A proxy works at the application level, while a VPN works at the OS/network level and encrypts all traffic",
      "A VPN is always faster than a proxy",
      "Only a VPN can change your IP address",
      "Proxy servers are only for browsers"
    ],
    correctAnswer: 0,
    explanation: "A proxy server is typically configured on a per-application basis (e.g., in a web browser) and routes traffic for that specific application. A VPN is configured at the operating system level and routes all network traffic from the device through an encrypted tunnel."
  },
  {
    id: 126,
    question: "What is the fundamental difference between CSMA/CD and CSMA/CA?",
    options: [
      "CD is for wired networks, CA is for wireless",
      "CD detects collisions after they happen, CA tries to avoid collisions before they happen",
      "CD is faster than CA",
      "Both a and b are correct"
    ],
    correctAnswer: 3,
    explanation: "CSMA/CD (Collision Detection) is used in wired Ethernet. A device listens while sending; if it detects another transmission, it stops and retries after a random interval. CSMA/CA (Collision Avoidance) is used in Wi-Fi, where detecting collisions is difficult. A device listens for a clear channel and may use signals like RTS/CTS to reserve the channel before transmitting."
  },
  {
    id: 127,
    question: "What does HTTP Strict Transport Security (HSTS) do?",
    options: [
      "It encrypts HTTP traffic",
      "It is a security policy that tells a browser to only interact with a website using secure HTTPS connections",
      "It is a faster version of HTTPS",
      "It blocks all non-secure content from loading"
    ],
    correctAnswer: 1,
    explanation: "When a website sends an HSTS header, it instructs the browser to automatically convert all future HTTP requests for that domain to HTTPS. This helps protect against protocol downgrade attacks and cookie hijacking."
  },
  {
    id: 128,
    question: "What is the primary responsibility of the Data Link Layer (OSI Layer 2)?",
    options: [
      "End-to-end communication and flow control",
      "Routing packets between different networks",
      "Transferring data between adjacent network nodes on the same network",
      "Providing an interface for applications"
    ],
    correctAnswer: 2,
    explanation: "The Data Link Layer is responsible for reliable node-to-node communication on the same physical link. It deals with framing data, physical addressing (MAC addresses), and error detection for a single hop."
  },
  {
    id: 129,
    question: "What type of vulnerability was the Heartbleed bug?",
    options: [
      "A bug in the Linux kernel",
      "An SQL injection vulnerability",
      "A vulnerability in the OpenSSL cryptographic library, allowing the stealing of protected information",
      "A virus that spread through email"
    ],
    correctAnswer: 2,
    explanation: "Heartbleed was a buffer over-read vulnerability in the Heartbeat Extension of the OpenSSL library. It allowed attackers to read memory from affected servers, which could expose sensitive information like server private keys, user session cookies, and passwords."
  },
  {
    id: 130,
    question: "What is the purpose of the Fast Retransmit mechanism in TCP?",
    options: [
      "To speed up the initial connection handshake",
      "To retransmit a lost packet before its retransmission timer expires, based on receiving duplicate ACKs",
      "To quickly reset a failed connection",
      "To send packets at a faster rate"
    ],
    correctAnswer: 1,
    explanation: "If a TCP sender receives three acknowledgments for the same packet (known as 'triple duplicate ACKs'), it is a strong indication that the subsequent packet has been lost. Instead of waiting for a timeout, the sender immediately retransmits the lost packet, significantly improving performance."
  },
  {
    id: 131,
    question: "What is the purpose of a DNS MX (Mail Exchanger) record?",
    options: [
      "To map a domain to an IPv4 address",
      "To specify the mail servers responsible for accepting email messages on behalf of a domain",
      "To create an alias for a domain",
      "To store arbitrary text data"
    ],
    correctAnswer: 1,
    explanation: "When you send an email to user@example.com, the sending mail server performs a DNS lookup for the MX records of example.com to find the IP addresses of the mail servers where the email should be delivered."
  },
  {
    id: 132,
    question: "What is the difference between Baud Rate and Bit Rate?",
    options: [
      "They are always the same",
      "Baud rate is the number of signal changes per second, while bit rate is the number of bits transmitted per second",
      "Bit rate is always higher than baud rate",
      "Baud rate is for analog signals, bit rate is for digital"
    ],
    correctAnswer: 1,
    explanation: "Baud rate refers to the number of symbols or signaling events that occur per second. If each symbol can represent more than one bit (e.g., by using different voltage levels), the bit rate (bps) can be higher than the baud rate."
  },
  {
    id: 133,
    question: "What is the purpose of a checksum in a packet header (e.g., TCP, IP)?",
    options: [
      "To encrypt the header data",
      "To verify the integrity of the header data and detect errors",
      "To specify the destination address",
      "To indicate the packet's priority"
    ],
    correctAnswer: 1,
    explanation: "The sender calculates a checksum value based on the header's contents and includes it in the header. The receiver performs the same calculation. If the results do not match, it indicates the header was corrupted during transit, and the packet is typically discarded."
  },
  {
    id: 134,
    question: "What is bandwidth throttling?",
    options: [
      "The process of increasing available bandwidth",
      "The intentional slowing of an internet service by an internet service provider or system administrator",
      "A security attack that consumes all available bandwidth",
      "The natural fluctuation in network speed"
    ],
    correctAnswer: 1,
    explanation: "Throttling is used to limit the rate at which traffic is sent or received. ISPs may use it to manage network congestion or enforce data caps. System administrators might use it to prevent a single application from consuming all available bandwidth."
  },
  {
    id: 135,
    question: "How does a SYN flood attack work?",
    options: [
      "By sending a flood of FIN packets to close connections",
      "By sending a flood of data packets to overwhelm a server's bandwidth",
      "By sending many SYN requests to a target but not completing the handshake, consuming server resources",
      "By sending malformed SYN packets"
    ],
    correctAnswer: 2,
    explanation: "The attacker sends a high volume of SYN packets (the first step of the TCP handshake) but never sends the final ACK. This forces the server to keep a large number of half-open connections, consuming memory and resources until it can no longer accept new, legitimate connections."
  },
  {
    id: 136,
    question: "Why is it often beneficial to change the Wi-Fi channel on a router?",
    options: [
      "To change the Wi-Fi password",
      "To improve the signal by moving to a less congested channel with less interference",
      "To increase the physical range of the Wi-Fi signal",
      "To enable a higher encryption standard"
    ],
    correctAnswer: 1,
    explanation: "Wi-Fi operates on a limited number of channels. If many nearby networks are using the same channel, it causes co-channel interference, which degrades performance. Using a network analyzer to find and switch to a less crowded channel can significantly improve speed and stability."
  },
  {
    id: 137,
    question: "What is 'encapsulation' in the context of network models?",
    options: [
      "The process of encrypting data",
      "The process of compressing data to save bandwidth",
      "The process of adding headers and trailers to data as it passes down through the network layers",
      "The process of removing headers as data moves up the stack"
    ],
    correctAnswer: 2,
    explanation: "As application data moves from the Application Layer down to the Physical Layer, each layer adds its own control information (a header, and sometimes a trailer) to the data received from the layer above. This 'wrapping' process is called encapsulation."
  },
  {
    id: 138,
    question: "What is the purpose of the HTTP OPTIONS method?",
    options: [
      "To retrieve data from a server",
      "To submit data to a server",
      "To request information about the communication options available for a target resource",
      "To delete a resource"
    ],
    correctAnswer: 2,
    explanation: "A client can send an OPTIONS request to a server to determine which HTTP methods (e.g., GET, POST, PUT) the server supports for a specific URL. This is frequently used as part of a CORS pre-flight request."
  },
  {
    id: 139,
    question: "What is the main difference between a stateful and a stateless firewall?",
    options: [
      "A stateful firewall is hardware, while a stateless one is software",
      "A stateful firewall can block more IP addresses",
      "A stateless firewall inspects packets in isolation, while a stateful firewall tracks active connections",
      "A stateless firewall is much more secure"
    ],
    correctAnswer: 2,
    explanation: "A stateless firewall (or packet filter) makes decisions based solely on the source/destination IP and port of each individual packet. A stateful firewall maintains a table of active connections and can make more intelligent decisions, such as allowing return traffic only for connections that were initiated from inside the network."
  },
  {
    id: 140,
    question: "Where can DNS records be cached?",
    options: [
      "Only on the authoritative DNS server",
      "Only on the user's computer",
      "In the browser, the operating system, local routers, and recursive DNS servers",
      "Only in the web browser"
    ],
    correctAnswer: 2,
    explanation: "DNS caching occurs at multiple levels to speed up name resolution and reduce the load on root DNS servers. Your browser checks its cache first, then the OS, then your local router, and then your ISP's resolver, each checking its cache before forwarding the query."
  },
  {
    id: 141,
    question: "Which transport protocol is typically preferred for VoIP and why?",
    options: [
      "TCP, because it guarantees delivery",
      "UDP, because low latency is more important than guaranteed delivery",
      "HTTP, because it can traverse firewalls",
      "FTP, because it is efficient"
    ],
    correctAnswer: 1,
    explanation: "In a real-time conversation, receiving a delayed voice packet is as useless as not receiving it at all. UDP's lack of handshakes and retransmissions makes it much faster than TCP, which is critical for good voice quality. It's better to experience a tiny audio dropout (a lost packet) than a long delay (waiting for a retransmitted packet)."
  },
  {
    id: 142,
    question: "What does the hostname localhost typically resolve to?",
    options: [
      "The IP address of the router",
      "The public IP address of the computer",
      "The loopback IP address 127.0.0.1",
      "The broadcast address of the network"
    ],
    correctAnswer: 2,
    explanation: "localhost is a standard hostname that refers to the current computer. It resolves to the IPv4 loopback address 127.0.0.1 and the IPv6 loopback address ::1. This allows developers to run and test network services on their local machine."
  },
  {
    id: 143,
    question: "How does a basic SQL Injection attack work in the context of a web application?",
    options: [
      "By flooding the server with SQL queries",
      "By inserting malicious SQL code into a web form input to manipulate the backend database",
      "By encrypting the website's database",
      "By guessing the password to the database"
    ],
    correctAnswer: 1,
    explanation: "If a web application does not properly sanitize user input before including it in an SQL query, an attacker can input SQL commands. This can be used to bypass authentication, retrieve sensitive data, or modify and delete database records."
  },
  {
    id: 144,
    question: "What is the main difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
    options: [
      "An IDS is hardware, an IPS is software",
      "An IDS only detects and alerts, while an IPS can also take action to block threats",
      "An IPS is inside the network, while an IDS is on the perimeter",
      "An IDS is an older, less effective technology"
    ],
    correctAnswer: 1,
    explanation: "An IDS is a passive monitoring tool; it sits off to the side, analyzes a copy of the traffic, and generates alerts. An IPS is an active, inline device; traffic must pass through it, and if it detects a threat, it can drop the malicious packets before they reach the target."
  },
  {
    id: 145,
    question: "What type of network is Frame Relay?",
    options: [
      "A modern wireless networking standard",
      "A packet-switching WAN service for data transmission between LANs",
      "A physical layer protocol for fiber optics",
      "A protocol for email transmission"
    ],
    correctAnswer: 1,
    explanation: "Frame Relay is a legacy WAN technology that provides a connection-oriented service at the Data Link Layer. It was a popular and cost-efficient way for enterprises to connect their LANs over wide areas before MPLS and internet-based VPNs became common."
  },
  {
    id: 146,
    question: "What is the purpose of EtherChannel (or Link Aggregation)?",
    options: [
      "To connect Ethernet networks to other types of networks",
      "To provide power over Ethernet cables",
      "To group several physical Ethernet links into one logical link for increased bandwidth and redundancy",
      "To encrypt Ethernet frames"
    ],
    correctAnswer: 2,
    explanation: "Link aggregation allows you to combine multiple physical connections between two devices (e.g., two switches) into a single, higher-capacity logical link. This increases the available bandwidth and provides fault tolerance; if one physical link fails, traffic is automatically redirected over the remaining links."
  },
  {
    id: 147,
    question: "What does the Server Push feature in HTTP/2 allow?",
    options: [
      "The server to push advertisements to the client",
      "The server to proactively send resources to the client that it anticipates the client will need",
      "The server to force the client to refresh the page",
      "The server to terminate the client's connection"
    ],
    correctAnswer: 1,
    explanation: "When a browser requests a page like index.html, a smart server knows it will also need resources like style.css and script.js. With Server Push, the server can send those files along with the initial HTML response without waiting for the browser to parse the HTML and request them, reducing round trips and speeding up page loads."
  },
  {
    id: 148,
    question: "In classful networking, what was the default subnet mask for a Class A network?",
    options: [ "255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255" ],
    correctAnswer: 0,
    explanation: "In the obsolete classful system, Class A networks (with a first octet of 1-126) used the first 8 bits for the network ID and the remaining 24 bits for host IDs. This corresponds to a /8 prefix or a 255.0.0.0 subnet mask."
  },
  {
    id: 149,
    question: "Which IEEE 802.11 standard is commonly known as Wi-Fi 6?",
    options: [ "802.11n", "802.11ac", "802.11g", "802.11ax" ],
    correctAnswer: 3,
    explanation: "The Wi-Fi Alliance introduced a simpler naming scheme for consumers. 802.11n is Wi-Fi 4, 802.11ac is Wi-Fi 5, and 802.11ax is Wi-Fi 6. Wi-Fi 6 is designed to improve performance in crowded wireless environments."
  },
  {
    id: 150,
    question: "What is a phishing attack?",
    options: [
      "A physical attack on network hardware",
      "A denial-of-service attack",
      "A social engineering attack using fraudulent messages to trick a person into revealing sensitive information",
      "An attack that injects malware into a network"
    ],
    correctAnswer: 2,
    explanation: "Phishing attacks are a form of social engineering where an attacker creates deceptive emails, messages, or websites that appear to be from legitimate sources (like a bank or a known service). The goal is to lure victims into providing sensitive data like login credentials, credit card numbers, or personal information."
  },
  {
    id: 151,
    question: "How does gRPC primarily differ from a typical REST API?",
    options: [
      "gRPC is text-based, while REST is binary.",
      "gRPC uses HTTP/1.1, while REST uses HTTP/2.",
      "gRPC uses Protocol Buffers for serialization and operates over HTTP/2, making it more efficient.",
      "gRPC is only for internal communication, while REST is for public APIs."
    ],
    correctAnswer: 2,
    explanation: "gRPC is a modern RPC (Remote Procedure Call) framework that uses Protocol Buffers, a binary serialization format, instead of text-based JSON. It leverages the features of HTTP/2, like multiplexing and server push, to offer higher performance and lower latency than traditional REST APIs over HTTP/1.1."
  },
  {
    id: 152,
    question: "What security problem does DNSSEC (Domain Name System Security Extensions) primarily address?",
    options: [
      "Denial-of-service attacks against DNS servers",
      "The lack of encryption for DNS queries",
      "DNS cache poisoning and man-in-the-middle attacks by providing data integrity and authentication.",
      "The slow speed of DNS resolution"
    ],
    correctAnswer: 2,
    explanation: "DNSSEC uses digital signatures to ensure that the DNS data you receive is authentic and has not been tampered with. It protects users from being redirected to malicious sites by a compromised DNS resolver."
  },
  {
    id: 153,
    question: "In the context of Docker or Kubernetes, what is an 'overlay network'?",
    options: [
      "A network that connects physical servers in a data center",
      "A virtual network that is layered on top of the existing physical network to enable communication between containers across different hosts.",
      "A tool for monitoring network traffic between containers",
      "A high-speed physical network dedicated to container traffic"
    ],
    correctAnswer: 1,
    explanation: "An overlay network creates a virtual Layer 2 or Layer 3 network for containers that is decoupled from the underlying physical network. It encapsulates container traffic in packets of the physical network, allowing containers on different host machines to communicate as if they were on the same network segment."
  },
  {
    id: 154,
    question: "What is the primary role of a service mesh (e.g., Istio, Linkerd) in a microservices architecture?",
    options: [
      "To deploy and scale microservices",
      "To provide a dedicated network layer for managing, securing, and observing service-to-service communication.",
      "To store the source code for microservices",
      "To provide a database for each microservice"
    ],
    correctAnswer: 1,
    explanation: "A service mesh uses lightweight proxies (called sidecars) that are deployed alongside each microservice. This creates a configurable, application-aware network that can handle tasks like load balancing, service discovery, traffic encryption (mTLS), and collecting detailed telemetry, all without changing the application code."
  },
  {
    id: 155,
    question: "What is the main purpose of the ETag HTTP header?",
    options: [
      "To specify the content type of the response",
      "To provide a unique identifier for a specific version of a resource, used for caching validation.",
      "To set a cookie on the client",
      "To indicate the age of the requested resource"
    ],
    correctAnswer: 1,
    explanation: "The server generates an ETag for a resource. When a client caches this resource, it stores the ETag. To check if the cached version is still valid, the client can make a conditional GET request with an If-None-Match header. If the ETag on the server still matches, the server can respond with 304 Not Modified, saving bandwidth."
  },
  {
    id: 156,
    question: "What is a key performance improvement in TLS 1.3 compared to TLS 1.2?",
    options: [
      "It uses stronger, 4096-bit encryption by default.",
      "The handshake process is faster, often requiring only one round-trip (1-RTT) instead of two.",
      "It is built on top of UDP for lower latency.",
      "It completely removes the need for digital certificates."
    ],
    correctAnswer: 1,
    explanation: "TLS 1.3 redesigned the handshake process to be more efficient. For a new connection, it takes only one round trip. For a subsequent connection to a known server, a 'zero round trip' (0-RTT) mode is even possible, significantly reducing connection setup latency."
  },
  {
    id: 157,
    question: "In cloud networking, what is a VPC (Virtual Private Cloud)?",
    options: [
      "A VPN connection to a cloud provider",
      "A logically isolated section of a public cloud where you can launch resources in a virtual network that you define.",
      "A physical data center operated by a cloud provider",
      "A software-defined firewall"
    ],
    correctAnswer: 1,
    explanation: "A VPC allows you to have your own private network space within a public cloud provider like AWS or Google Cloud. You have full control over this virtual network, including selecting your own IP address range, creating subnets, and configuring route tables and network gateways."
  },
  {
    id: 158,
    question: "What is the purpose of IGMP (Internet Group Management Protocol)?",
    options: [
      "To manage security groups in a cloud environment",
      "To allow a host to inform its local router that it wants to join a specific multicast group.",
      "To provide gateway redundancy",
      "To exchange routing information within an autonomous system"
    ],
    correctAnswer: 1,
    explanation: "IGMP is used by hosts and routers on an IPv4 network to manage multicast group memberships. When a user wants to watch an IPTV channel, for example, their device sends an IGMP message to join the multicast group for that channel, and the router then starts forwarding the stream."
  },
  {
    id: 159,
    question: "How does an ARP poisoning/spoofing attack work?",
    options: [
      "By flooding the network with ARP requests",
      "By sending forged ARP reply messages to associate the attacker's MAC address with the IP address of another host.",
      "By blocking all ARP messages on a network",
      "By deleting the ARP table on a router"
    ],
    correctAnswer: 1,
    explanation: "In an ARP poisoning attack, the attacker sends fake ARP packets onto the LAN. A common goal is to associate the default gateway's IP address with the attacker's MAC address. This causes all traffic from the victim to the internet to be sent to the attacker first, enabling a man-in-the-middle attack."
  },
  {
    id: 160,
    question: "What is a primary benefit of using jumbo frames on a local network?",
    options: [
      "They are more secure than standard frames.",
      "They can travel longer distances.",
      "They reduce CPU overhead and increase throughput by sending more data per frame.",
      "They are easier for routers to process."
    ],
    correctAnswer: 2,
    explanation: "A standard Ethernet frame has an MTU of 1500 bytes. Jumbo frames can carry up to 9000 bytes of payload. By putting more data into each frame, the number of frames and the amount of header processing required to transmit the same amount of data is reduced, which can improve performance on high-speed networks (like storage networks)."
  },
  {
    id: 161,
    question: "How does Server Name Indication (SNI) allow a single server to host multiple HTTPS websites on one IP address?",
    options: [
      "By using different port numbers for each website",
      "By including the requested hostname in the initial TLS handshake.",
      "By encrypting the server's IP address",
      "By using a special multi-domain certificate"
    ],
    correctAnswer: 1,
    explanation: "SNI is an extension to the TLS protocol. It allows the client to specify which hostname it is trying to connect to at the start of the handshake process. This enables the server to see the requested hostname and present the correct SSL certificate from its collection of certificates."
  },
  {
    id: 162,
    question: "A user can successfully ping 8.8.8.8 but cannot browse to https://www.google.com. What is the most likely cause?",
    options: [
      "The user's computer has no default gateway.",
      "A firewall is blocking IP traffic.",
      "The user's DNS server is misconfigured or unreachable.",
      "The user's network cable is unplugged."
    ],
    correctAnswer: 2,
    explanation: "The ability to ping an IP address directly confirms that Layer 3 (IP) connectivity to the internet is working. The inability to browse to a domain name indicates that the system cannot resolve that name into an IP address, which is the primary function of DNS."
  },
  {
    id: 163,
    question: "Who is responsible for reassembling fragmented IP packets?",
    options: [
      "The router immediately after the link with the small MTU",
      "Every router along the path",
      "The final destination host.",
      "The source host, which retransmits them"
    ],
    correctAnswer: 2,
    explanation: "Routers may fragment a packet if it's too large, but they do not reassemble it. Reassembly is left to the destination host's IP layer. This simplifies the job of routers and distributes the processing load."
  },
  {
    id: 164,
    question: "How does a Cross-Site Scripting (XSS) attack work?",
    options: [
      "By tricking a user into sending an unwanted command to a web application they are logged into.",
      "By injecting malicious scripts into a trusted website, which are then executed in the victim's browser.",
      "By stealing cookies from the user's browser cache.",
      "By flooding a website with malicious requests."
    ],
    correctAnswer: 1,
    explanation: "In an XSS attack, an attacker finds a vulnerability (e.g., in a comment section or search bar) to inject malicious JavaScript into a web page viewed by other users. When a victim's browser loads the page, the script executes and can be used to steal session cookies, deface websites, or redirect the user to malicious sites."
  },
  {
    id: 165,
    question: "What is an ephemeral port?",
    options: [
      "A well-known port used by a standard service (e.g., port 80 for HTTP)",
      "A temporary port from a high-numbered range used by a client as its source port for a connection.",
      "A physical port on a switch that is temporarily enabled.",
      "A port that has been blocked by a firewall."
    ],
    correctAnswer: 1,
    explanation: "When a client initiates a connection to a server's well-known port (like port 443), the client's operating system assigns a random, unused, high-numbered port (typically above 49151) as the source port for its side of the connection. This is the ephemeral port."
  },
  {
    id: 166,
    question: "What is the key concept behind Software-Defined Networking (SDN)?",
    options: [
      "Using software to configure firewalls",
      "Running all network devices as virtual machines",
      "Separating the network's control plane from its data plane.",
      "A new, more efficient routing protocol"
    ],
    correctAnswer: 2,
    explanation: "In traditional networking, each device has its own control plane (making routing decisions) and data plane (forwarding packets). SDN centralizes the control plane in a software-based controller. The controller has a global view of the network and can program the data planes of simple forwarding devices, which makes the network more agile and programmable."
  },
  {
    id: 167,
    question: "What is a common use for a DNS TXT record?",
    options: [
      "To point a domain name to an IP address",
      "To specify the mail servers for a domain",
      "To add arbitrary text data, often used for verification purposes like SPF or DKIM.",
      "To create an alias for a domain name"
    ],
    correctAnswer: 2,
    explanation: "TXT records are designed to hold human-readable or machine-readable text data. They are widely used for email authentication (SPF records list authorized sending servers; DKIM provides a digital signature) and for verifying domain ownership with third-party services."
  },
  {
    id: 168,
    question: "What is the core principle of a 'zero-trust' network security model?",
    options: [
      "Trust all devices inside the corporate network.",
      "Block all traffic from outside the network.",
      "Never trust, always verify; treat every user and device as a potential threat regardless of location.",
      "Only use encrypted communication protocols."
    ],
    correctAnswer: 2,
    explanation: "The traditional 'castle-and-moat' model trusts everything inside the network. The zero-trust model assumes the network is already compromised. It requires strict identity verification and authentication for every person and device trying to access resources on the network, even if they are located 'inside.'"
  },
  {
    id: 169,
    question: "What is the primary difference between a forward proxy and a reverse proxy?",
    options: [
      "A forward proxy is for incoming traffic; a reverse proxy is for outgoing traffic.",
      "A forward proxy is used by clients to access the internet; a reverse proxy is used by servers to handle requests from the internet.",
      "A forward proxy encrypts traffic, while a reverse proxy does not.",
      "A reverse proxy is another name for a firewall."
    ],
    correctAnswer: 1,
    explanation: "A forward proxy sits in front of client computers and forwards their requests to the internet, hiding the client's identity. A reverse proxy sits in front of web servers and forwards incoming client requests to the appropriate server, providing services like load balancing, caching, and SSL termination."
  },
  {
    id: 170,
    question: "What does WebRTC enable?",
    options: [
      "A new standard for creating dynamic web pages",
      "A framework for building web servers in JavaScript",
      "Real-time, peer-to-peer communication (voice, video, and data) directly between web browsers.",
      "A protocol for encrypting all web traffic"
    ],
    correctAnswer: 2,
    explanation: "WebRTC (Web Real-Time Communication) is an open-source project providing browsers and mobile applications with APIs that enable direct peer-to-peer communication without the need for an intermediary server (after initial connection setup) or special plugins."
  },
  {
    id: 171,
    question: "In Wi-Fi 6 (802.11ax), what is the primary benefit of OFDMA (Orthogonal Frequency-Division Multiple Access)?",
    options: [
      "It dramatically increases the maximum theoretical speed for a single device.",
      "It improves overall network efficiency and reduces latency in dense environments by dividing a channel to serve multiple clients simultaneously.",
      "It extends the physical range of the Wi-Fi signal.",
      "It provides stronger encryption than WPA3."
    ],
    correctAnswer: 1,
    explanation: "Previous Wi-Fi generations served one client at a time on a given channel. OFDMA allows an access point to subdivide a channel into smaller resource units and talk to multiple clients at the same time. This is like a delivery truck delivering packages to multiple houses on one trip instead of making a separate trip for each house, which is highly efficient when there are many small packets (common in modern web traffic)."
  },
  {
    id: 172,
    question: "What is BGP hijacking?",
    options: [
      "Physically stealing a BGP router",
      "A denial-of-service attack against a BGP router",
      "The malicious re-routing of internet traffic by illegitimately taking control of IP prefixes.",
      "A form of IP spoofing"
    ],
    correctAnswer: 2,
    explanation: "BGP hijacking occurs when a network operator incorrectly or maliciously announces that they own IP addresses that they do not. If other networks believe this false announcement, they will route traffic for those IPs to the hijacker, allowing them to intercept or block the traffic."
  },
  {
    id: 173,
    question: "What does Deep Packet Inspection (DPI) allow a network device to do?",
    options: [
      "Only examine the headers of a packet (e.g., source/destination IP)",
      "Examine the data payload of a packet in addition to its header.",
      "Reassemble fragmented packets",
      "Encrypt packet payloads"
    ],
    correctAnswer: 1,
    explanation: "While standard firewalls make decisions based on header information, devices with DPI capabilities look at the actual content of the data being sent. This allows for more advanced security functions, like identifying specific applications or protocols (e.g., blocking BitTorrent traffic) or detecting viruses within network traffic."
  },
  {
    id: 174,
    question: "A user reports that the internet is slow. A ping to a server shows a low RTT of 20ms, but a traceroute shows a hop in the middle with a very high latency of 300ms. What does this most likely indicate?",
    options: [
      "The user's local network is the problem.",
      "The destination server is overloaded.",
      "There is network congestion or a slow link at a specific router along the path.",
      "The traceroute command is faulty."
    ],
    correctAnswer: 2,
    explanation: "ping only shows the final RTT. traceroute reveals the latency at each hop. If the final RTT is low but an intermediate hop is high, it suggests that the router at that hop is either configured to deprioritize the ICMP packets used by traceroute, or more likely, it's a point of congestion in the provider's network."
  },
  {
    id: 175,
    question: "Why was HTTP Public Key Pinning (HPKP) largely deprecated by browsers?",
    options: [
      "It was too slow and impacted performance.",
      "It could be easily bypassed by attackers.",
      "It was very risky; a misconfiguration could make a website inaccessible for a long period.",
      "It was replaced by the HSTS header."
    ],
    correctAnswer: 2,
    explanation: "HPKP allowed a website to tell browsers to 'pin' its public key certificate. While this protected against certificate mis-issuance, if the site operator made a mistake or lost their pinned keys, their users would be locked out of the site until the pin expired (which could be months). The risk of self-inflicted denial of service was too high."
  },
  {
    id: 176,
    question: "What is the difference between unicast, multicast, and broadcast traffic?",
    options: [
      "Unicast is wireless, multicast is wired, broadcast is fiber.",
      "Unicast is one-to-one, multicast is one-to-many (interested receivers), broadcast is one-to-all (on the subnet).",
      "Unicast is for data, multicast is for video, broadcast is for system messages.",
      "Unicast is secure, multicast is semi-secure, broadcast is insecure."
    ],
    correctAnswer: 1,
    explanation: "Unicast: A packet sent from a single source to a single destination. This is the most common form of traffic. Multicast: A packet sent from a single source to multiple destinations that have explicitly subscribed to the multicast group. Used for things like IPTV. Broadcast: A packet sent from a single source to all devices on the same broadcast domain (subnet). Used for things like DHCP discovery."
  },
  {
    id: 177,
    question: "Which protocol is responsible for preventing routing loops in an Ethernet network?",
    options: [ "OSPF", "BGP", "ARP", "STP (Spanning Tree Protocol)" ],
    correctAnswer: 3,
    explanation: "STP is a Layer 2 protocol designed to prevent bridge loops in networks with redundant paths. It creates a tree topology by disabling links that are not part of the primary path, ensuring there is only one active path between any two network segments."
  },
  {
    id: 178,
    question: "What is the 'three-way handshake' in TCP used for?",
    options: [
      "To terminate a connection",
      "To reliably establish a connection.",
      "To negotiate the window size",
      "To retransmit lost packets"
    ],
    correctAnswer: 1,
    explanation: "TCP uses a three-step process (SYN, SYN-ACK, ACK) to ensure that both the client and server are ready to communicate, have established initial sequence numbers, and have agreed upon connection parameters before any data is sent."
  },
  {
    id: 179,
    question: "What is a key difference between routing and switching?",
    options: [
      "Switching occurs at Layer 3, routing at Layer 2.",
      "Switching uses IP addresses, routing uses MAC addresses.",
      "Switching occurs within a single network (LAN), while routing occurs between different networks.",
      "Switching is faster but less reliable than routing."
    ],
    correctAnswer: 2,
    explanation: "A switch makes decisions to forward frames based on MAC addresses to devices on the same local network. A router makes decisions to forward packets based on IP addresses to devices on different networks."
  },
  {
    id: 180,
    question: "What is the purpose of a cookie's HttpOnly flag?",
    options: [
      "It ensures the cookie is only sent over HTTPS.",
      "It makes the cookie inaccessible to client-side scripts (JavaScript).",
      "It makes the cookie expire at the end of the session.",
      "It encrypts the cookie's value."
    ],
    correctAnswer: 1,
    explanation: "The HttpOnly flag is a crucial security measure that helps mitigate Cross-Site Scripting (XSS) attacks. By preventing JavaScript from accessing the cookie (e.g., a session token), an attacker who successfully injects a script cannot easily steal that cookie."
  },
  {
    id: 181,
    question: "What is the primary function of a NAT (Network Address Translation) gateway?",
    options: [
      "To encrypt all network traffic",
      "To assign public IP addresses to every device on a LAN",
      "To allow multiple devices with private IP addresses on a LAN to share a single public IP address.",
      "To block unwanted websites"
    ],
    correctAnswer: 2,
    explanation: "NAT modifies the source IP address in packet headers as they leave a private network. It maps the private IP and port of an internal device to its own public IP and a unique port, allowing many devices to communicate on the internet using just one public IP."
  },
  {
    id: 182,
    question: "What is the main difference between TCP and UDP?",
    options: [
      "TCP is faster than UDP.",
      "UDP is connection-oriented, while TCP is connectionless.",
      "TCP provides reliable, ordered delivery, while UDP is a lightweight, best-effort protocol.",
      "TCP is for video streaming, and UDP is for file transfers."
    ],
    correctAnswer: 2,
    explanation: "TCP establishes a connection and includes mechanisms for error checking, acknowledgments, and retransmissions to ensure data arrives correctly and in order. UDP does not provide these guarantees, making it faster but less reliable, suitable for time-sensitive applications like gaming or VoIP."
  },
  {
    id: 183,
    question: "Which layer of the OSI model is responsible for routing decisions?",
    options: [ "Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)" ],
    correctAnswer: 2,
    explanation: "The Network Layer is responsible for logical addressing (IP addresses) and determining the best path to forward packets from a source network to a destination network. Routers operate at this layer."
  },
  {
    id: 184,
    question: "What does the HTTP status code 401 Unauthorized signify?",
    options: [
      "The requested resource does not exist.",
      "The client lacks valid authentication credentials for the target resource.",
      "The server understands the request but refuses to authorize it.",
      "The server encountered an unexpected error."
    ],
    correctAnswer: 1,
    explanation: "A 401 response indicates that the request has not been applied because it lacks valid authentication credentials. This is often accompanied by a WWW-Authenticate header that tells the client how to authenticate (e.g., Basic, Bearer). It differs from 403 Forbidden, where the server knows the client's identity but is refusing access."
  },
  {
    id: 185,
    question: "What does the term 'full-duplex' mean in data communication?",
    options: [
      "Data can only be transmitted in one direction.",
      "Data can be transmitted in both directions, but not simultaneously.",
      "Data can be transmitted in both directions simultaneously.",
      "Data is transmitted to all devices at once."
    ],
    correctAnswer: 2,
    explanation: "Full-duplex communication allows a device to send and receive data at the same time, like a telephone conversation. In contrast, half-duplex allows communication in both directions, but only one way at a time, like a walkie-talkie. Modern network switches operate in full-duplex mode."
  },
  {
    id: 186,
    question: "Which DNS record type specifies an alias or nickname for another domain?",
    options: [ "A", "AAAA", "CNAME", "MX" ],
    correctAnswer: 2,
    explanation: "A CNAME (Canonical Name) record maps one domain name to another. For example, www.example.com can have a CNAME record pointing to example.com. This is useful when running multiple services (like an FTP server and a web server) from a single IP address."
  },
  {
    id: 187,
    question: "What problem do First-Hop Redundancy Protocols like HSRP and VRRP solve?",
    options: [
      "They prevent routing loops.",
      "They provide a redundant default gateway for hosts on a subnet.",
      "They load-balance traffic across multiple internet connections.",
      "They provide faster DNS resolution."
    ],
    correctAnswer: 1,
    explanation: "If a subnet's only router (its default gateway) fails, all hosts lose connectivity to other networks. HSRP (Hot Standby Router Protocol) and VRRP (Virtual Router Redundancy Protocol) allow two or more routers to share a virtual IP address, with one acting as the active gateway and the others as standbys, providing failover if the active one goes down."
  },
  {
    id: 188,
    question: "What is the main characteristic of a Denial of Service (DoS) attack?",
    options: [
      "To steal sensitive user data",
      "To gain unauthorized access to a system",
      "To make a machine or network resource unavailable to its intended users.",
      "To install malware on a system"
    ],
    correctAnswer: 2,
    explanation: "A DoS attack aims to overwhelm a target system with traffic or exploit a vulnerability that causes it to crash or become unresponsive. A Distributed Denial of Service (DDoS) attack is a DoS attack launched from many different compromised systems simultaneously."
  },
  {
    id: 189,
    question: "Which of the following is an example of a private IP address range according to RFC 1918?",
    options: [
      "8.8.8.0 - 8.8.8.255",
      "127.0.0.0 - 127.255.255.255",
      "172.16.0.0 - 172.31.255.255",
      "224.0.0.0 - 239.255.255.255"
    ],
    correctAnswer: 2,
    explanation: "RFC 1918 defines three blocks of IP address space for use in private networks: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. These addresses are not routable on the public internet."
  },
  {
    id: 190,
    question: "A browser is instructed to load a web page. Which protocol will it likely use first?",
    options: [ "HTTP", "TCP", "DNS", "IP" ],
    correctAnswer: 2,
    explanation: "Before a browser can establish a connection to a web server like www.browserstack.com, it must first translate that human-readable domain name into a machine-readable IP address. This is the job of the Domain Name System (DNS)."
  },
  {
    id: 191,
    question: "What is the purpose of the TCP 'sliding window'?",
    options: [
      "To reorder out-of-sequence packets",
      "To provide an efficient flow control mechanism.",
      "To encrypt the TCP header",
      "To negotiate the initial sequence number"
    ],
    correctAnswer: 1,
    explanation: "The sliding window allows a sender to transmit multiple packets (a 'window') without waiting for an acknowledgment for each individual one. The receiver specifies the current window size, which tells the sender how much data it can buffer. This greatly improves throughput compared to a stop-and-wait approach."
  },
  {
    id: 192,
    question: "What is the main difference between a hub and a switch?",
    options: [
      "A hub operates at Layer 3, a switch at Layer 2.",
      "A hub is more secure than a switch.",
      "A hub creates a single collision domain, while a switch creates a separate one for each port.",
      "A hub can handle more traffic than a switch."
    ],
    correctAnswer: 2,
    explanation: "A hub simply regenerates and broadcasts any incoming signal to all of its ports. This means all connected devices are in the same collision domain. A switch is more intelligent; it learns the MAC addresses on each port and forwards traffic only to the intended destination port, thereby isolating collision domains and improving performance."
  },
  {
    id: 193,
    question: "What is IP Spoofing?",
    options: [
      "Stealing an IP address from another device",
      "The creation of IP packets with a forged source IP address.",
      "Blocking traffic from a specific IP address",
      "Hiding your IP address using a VPN"
    ],
    correctAnswer: 1,
    explanation: "IP spoofing is a technique used to obscure the identity of the sender or to impersonate another computer system. It is often used in DoS attacks to make it harder to filter the malicious traffic and to hide the true source of the attack."
  },
  {
    id: 194,
    question: "What is the function of DHCP?",
    options: [
      "To resolve domain names to IP addresses",
      "To automate the assignment of IP addresses and network configuration to devices.",
      "To route traffic between networks",
      "To secure network communication"
    ],
    correctAnswer: 1,
    explanation: "The Dynamic Host Configuration Protocol (DHCP) simplifies network administration by automatically providing connecting devices with an IP address, subnet mask, default gateway, and DNS server information, eliminating the need for manual configuration."
  },
  {
    id: 195,
    question: "What is the loopback IP address in IPv4?",
    options: [ "0.0.0.0", "255.255.255.255", "192.168.1.1", "127.0.0.1" ],
    correctAnswer: 3,
    explanation: "The address 127.0.0.1 is a special-purpose address reserved for loopback. Any traffic sent to this address is directed back to the sending host's own TCP/IP stack. It is commonly used for testing network applications on a local machine without involving any physical network hardware."
  },
  {
    id: 196,
    question: "Which of the following is an example of a stateful protocol?",
    options: [ "UDP", "HTTP", "IP", "FTP" ],
    correctAnswer: 3,
    explanation: "A stateful protocol requires the server to maintain the state (or context) of the client's session. FTP is stateful because it uses a primary control connection to track the user's login status and a separate data connection for file transfers. In contrast, HTTP is stateless; each request is independent."
  },
  {
    id: 197,
    question: "A network has a CIDR notation of 10.10.0.0/16. What is its subnet mask?",
    options: [ "255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.240.0" ],
    correctAnswer: 1,
    explanation: "The /16 indicates that the first 16 bits of the 32-bit address are used for the network portion. In binary, this is 16 ones followed by 16 zeros: 11111111.11111111.00000000.00000000. Converted to decimal, this is 255.255.0.0."
  },
  {
    id: 198,
    question: "What is the default port for SSH (Secure Shell)?",
    options: [ "21", "22", "23", "25" ],
    correctAnswer: 1,
    explanation: "Port 22 is the standard, IANA-assigned port for the SSH protocol, which is used for secure remote login and command execution. Port 21 is for FTP, 23 for Telnet, and 25 for SMTP."
  },
  {
    id: 199,
    question: "What does the 'Time to Live' (TTL) field in an IP header represent?",
    options: [
      "The time in seconds that the packet is allowed to exist",
      "A hop limit that is decremented by each router to prevent routing loops.",
      "The time for which a DNS record should be cached",
      "The round-trip time of the packet"
    ],
    correctAnswer: 1,
    explanation: "The TTL field is an 8-bit integer. When a packet is created, the source sets an initial TTL value (e.g., 64). Each router that forwards the packet subtracts one from the TTL. If the TTL reaches zero, the packet is discarded, and an ICMP 'Time Exceeded' message is sent to the source. This prevents packets from circulating endlessly on the network."
  },
  {
    id: 200,
    question: "A user types https://browserstack.com into their browser and presses Enter. Which of the following describes the correct high-level sequence of networking events?",
    options: [
      "HTTP Request -> TCP Handshake -> TLS Handshake -> DNS Lookup",
      "TCP Handshake -> DNS Lookup -> HTTP Request -> TLS Handshake",
      "DNS Lookup -> TCP Handshake -> TLS Handshake -> HTTP Request",
      "TLS Handshake -> DNS Lookup -> TCP Handshake -> HTTP Request"
    ],
    correctAnswer: 2,
    explanation: "This is the fundamental process of accessing a secure website: 1.DNS Lookup: The browser must first resolve browserstack.com to an IP address. 2.TCP Handshake: The browser initiates a three-way handshake (SYN, SYN-ACK, ACK) with the server's IP address on port 443 to establish a reliable connection. 3.TLS Handshake: Over the established TCP connection, the browser and server perform a TLS handshake to authenticate the server, agree on encryption ciphers, and generate session keys. 4.HTTP Request: Once the secure tunnel is established, the browser sends its encrypted HTTP GET request for the web page. The server then sends back the encrypted HTTP response."
  }

];