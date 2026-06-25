// ============================================================
// THE WEEKLY BOSS FIGHTS (Week 01 - Week 156)
// Target: 1095 Days / 7 = ~156 Weeks of Relentless Execution.
// ============================================================

const weeklyBossFights = {
  // --- PHASE 01: THE FOUNDATION (Week 01 - Week 21) ---
  Week_01: {
    technical_boss: "Build a responsive 'Hacker Portfolio' webpage using only HTML and CSS from memory.",
    physical_boss: "The 100-Pushup Gauntlet. Complete 100 standard push-ups in as few sets as possible."
  },
  Week_02: {
    technical_boss: "Build a JavaScript Calculator that handles complex logic errors (e.g., divide by zero).",
    physical_boss: "The Core Crusher: Accumulate 5 total minutes in a strict Plank position."
  },
  Week_03: {
    technical_boss: "Write an automated Bash recon tool (ping, whois, nslookup) that outputs to an organized file.",
    physical_boss: "The 3KM Burn: Run or power-walk 3 kilometers without stopping."
  },
  Week_04: {
    technical_boss: "Write a custom Port Scanner in Python using the 'socket' library for ports 1-1024.",
    physical_boss: "Pull & Hang: 50 total Pull-ups and 3 sets of max-time Dead Hangs."
  },
  Week_05: {
    technical_boss: "Draw the OSI Model from memory, explaining exactly what happens when requesting 'google.com'.",
    physical_boss: "The 200-Squat Challenge: 200 bodyweight squats with perfect form."
  },
  Week_06: {
    technical_boss: "Write a C program that uses strcpy, compile it, and deliberately trigger a Segmentation Fault.",
    physical_boss: "50 Burpees for Time: Chest to floor, explosive jump at the top."
  },
  Week_07: {
    technical_boss: "Run a stealthy Nmap scan on scanme.nmap.org and write a 1-page professional pentest summary.",
    physical_boss: "The 5KM Test: Run 5 kilometers without walking."
  },
  Week_08: {
    technical_boss: "Capture your own network traffic in Wireshark and extract your plaintext HTTP password.",
    physical_boss: "Abdominal Hell: 100 V-ups and 100 Russian Twists."
  },
  Week_09: {
    technical_boss: "Boot a Linux VM and manually hunt for SUID binaries and world-writable files without LinPEAS.",
    physical_boss: "The 100 Sprawl Gauntlet: 100 sprawls for time to build explosive hip mobility."
  },
  Week_10: {
    technical_boss: "Complete a 'Beginner' CTF on TryHackMe completely blind without walkthroughs.",
    physical_boss: "Phase 1 Baseline Exam: Max Push-ups (2 mins), Max Plank, Max Squats (2 mins)."
  },
  Week_11: {
    technical_boss: "Use Burp Suite Intruder to successfully brute-force a dummy login page via Sniper attack.",
    physical_boss: "Combat Cardio: 10 continuous rounds of 3-minute shadowboxing."
  },
  Week_12: {
    technical_boss: "Manually extract database version and user credentials using purely UNION-based SQLi.",
    physical_boss: "Explosive Power: 100 Jump Squats with maximum height."
  },
  Week_13: {
    technical_boss: "Write a custom JavaScript payload for Stored XSS that steals a session cookie and redirects.",
    physical_boss: "Animal Flow Endurance: 15 minutes of continuous Bear Crawls and Crab Walks."
  },
  Week_14: {
    technical_boss: "Build a malicious HTML page that forces a state-changing action via CSRF auto-submission.",
    physical_boss: "Push-up Power Test: 4 sets of 15 Clap Push-ups."
  },
  Week_15: {
    technical_boss: "Write a Python script to iterate through 100 user IDs on an API to map out IDOR vulnerabilities.",
    physical_boss: "The Iron Chair: Accumulate 5 total minutes in a Wall Sit position."
  },
  Week_16: {
    technical_boss: "Set up an Active Directory Domain Controller VM and join a Windows 10 client to the domain.",
    physical_boss: "Heavy Ruck: 60-minute fast walk with a 15kg backpack."
  },
  Week_17: {
    technical_boss: "Extract an AS-REP hash and a Kerberoastable TGS hash, then crack both offline with Hashcat.",
    physical_boss: "Pull & Back Burnout: 100 total strict Pull-ups."
  },
  Week_18: {
    technical_boss: "Use crackmapexec/NetExec to pass-the-hash and execute commands on your AD lab client.",
    physical_boss: "HIIT Execution: 20 minutes of alternating 30s max sprints and 30s walks."
  },
  Week_19: {
    technical_boss: "Pick a HackerOne target and perform a complete manual recon phase, documenting the tech stack.",
    physical_boss: "Max Broad Jumps: 50 maximum distance standing broad jumps."
  },
  Week_20: {
    technical_boss: "Root an 'Active' Medium difficulty machine on HackTheBox and write the pentest report.",
    physical_boss: "The Spartan 300: 50 reps each of Pull-ups, Push-ups, Squats, Box Jumps, V-ups, Burpees."
  },
  Week_21: {
    technical_boss: "Build a Next.js static portfolio shell with API fetching for a 'CVE Tracker' dashboard.",
    physical_boss: "The 100-Day Milestone Run: 50-minute steady endurance run."
  },

  // --- PHASE 02: CORE SECURITY & CLOUD (Week 22 - Week 45) ---
  Week_22: {
    technical_boss: "Dockerize your Next.js application and deploy it locally.",
    physical_boss: "Explosive Push-ups: 5 sets of 15."
  },
  Week_23: {
    technical_boss: "Write a GitHub Actions CI pipeline that automatically runs Bandit SAST on a Python script.",
    physical_boss: "Jumping Lunges: 100 total reps for explosive leg power."
  },
  Week_24: {
    technical_boss: "Deploy a multi-replica Nginx app on a local Minikube Kubernetes cluster.",
    physical_boss: "Typewriter Push-ups: 4 sets of 10 side-to-side transitions."
  },
  Week_25: {
    technical_boss: "Configure Kubernetes RBAC: Create a secure ServiceAccount, Role, and RoleBinding.",
    physical_boss: "Pistol Squats: 50 total assisted or strict single-leg squats."
  },
  Week_26: {
    technical_boss: "Write a Terraform script (main.tf) to deploy an S3 bucket or local Docker resource.",
    physical_boss: "Hindu Push-ups: 100 total dive-bombers."
  },
  Week_27: {
    technical_boss: "Write a Python script to query and extract AWS/GCP metadata from a local instance.",
    physical_boss: "Jump Rope Stamina: 30 minutes continuous."
  },
  Week_28: {
    technical_boss: "Pass a full-length Security+ mock exam with an 85%+ score.",
    physical_boss: "Diamond Push-up Burnout: 100 total reps."
  },
  Week_29: {
    technical_boss: "Exploit a Cross-Site WebSocket Hijacking (CSWSH) vulnerability in a lab environment.",
    physical_boss: "1-Hour Steady Run: Establish your cardiovascular baseline."
  },
  Week_30: {
    technical_boss: "Root an Active HTB machine focusing on cloud or web application pivoting.",
    physical_boss: "10-Minute Plank Protocol: Accumulate 10 mins with minimal breaks."
  },
  Week_31: {
    technical_boss: "Write a Bash pipeline combining subfinder and httpx to output only live web servers.",
    physical_boss: "Hill Sprints: 10 rounds of max-effort uphill sprints."
  },
  Week_32: {
    technical_boss: "Automate GraphQL introspection using Python to map out hidden API endpoints.",
    physical_boss: "Cossack Squats: 100 total reps for deep hip mobility."
  },
  Week_33: {
    technical_boss: "Build a Python script to extract URLs and endpoints from compiled JavaScript files.",
    physical_boss: "Trail Running: 45 minutes on unpaved, uneven terrain."
  },
  Week_34: {
    technical_boss: "Use masscan and nmap to identify non-standard open ports on a massive IP list.",
    physical_boss: "100 Sprawls to High Jumps: Total explosive exhaustion."
  },
  Week_35: {
    technical_boss: "Perform deep OSINT on a target's employees to find leaked GitHub credentials.",
    physical_boss: "Shadowboxing: 15 minutes continuous, full intensity."
  },
  Week_36: {
    technical_boss: "Complete your CS50P Python Final Project (e.g., a custom CLI security tool).",
    physical_boss: "50 Burpee Broad Jumps: Jump far, drop fast."
  },
  Week_37: {
    technical_boss: "Refactor your recon scripts to use Python's concurrent.futures for async speed.",
    physical_boss: "The Iron Chair: 6 total minutes of Wall Sits."
  },
  Week_38: {
    technical_boss: "Write a Python fuzzer specifically targeting Mass Assignment flaws in JSON APIs.",
    physical_boss: "Core Annihilation: 100 V-ups, 100 Russian Twists."
  },
  Week_39: {
    technical_boss: "Spin up an Axiom fleet and execute a distributed recon scan across a wildcard target.",
    physical_boss: "100m Sprints: 10 rounds of absolute max speed track sprints."
  },
  Week_40: {
    technical_boss: "Identify and verify a Subdomain Takeover using nuclei and custom CNAME verification.",
    physical_boss: "The 500-Rep Milestone: 100 reps each of 5 bodyweight movements."
  },
  Week_41: {
    technical_boss: "Write a Python script to decode, modify, and re-sign JWT tokens for 'none' algorithm bypass.",
    physical_boss: "Animal Flow: 20 minutes continuous dynamic movement."
  },
  Week_42: {
    technical_boss: "Decompile an Android APK with jadx and locate hardcoded AWS API credentials.",
    physical_boss: "100 Clap Push-ups: Pure fast-twitch chest power."
  },
  Week_43: {
    technical_boss: "Build a Python payload generator that encodes XSS payloads to bypass basic WAFs.",
    physical_boss: "Heavy Ruck: 90 minutes with 20kg backpack."
  },
  Week_44: {
    technical_boss: "Write a working Buffer Overflow exploit finding the EIP offset and bad characters.",
    physical_boss: "100 Strict Pull-ups: Break into sets, perfect form."
  },
  Week_45: {
    technical_boss: "Execute a BloodHound scan in your AD lab and map the shortest path to Domain Admin.",
    physical_boss: "Pistol Squats: 60 total reps (30 per leg)."
  },

  // --- PHASE 03 & 04: ADVANCED PENTEST & CLOUD (Week 46 - Week 87) ---
  Week_46: {
    technical_boss: "Perform a mock 12-hour OSCP sprint. Root 3 easy/medium machines back-to-back.",
    physical_boss: "Shadowboxing: 12 rounds of 3 minutes."
  },
  Week_47: {
    technical_boss: "Bypass antivirus using Veil or manual shellcode encryption to get a meterpreter shell.",
    physical_boss: "Sprawls: 150 reps for MMA-style conditioning."
  },
  Week_48: {
    technical_boss: "Execute a DCSync attack or forge a Golden Ticket in your local AD environment.",
    physical_boss: "Jump Squats: 150 reps for max height."
  },
  Week_49: {
    technical_boss: "Take a full-length AWS Security Specialty mock exam and score above 80%.",
    physical_boss: "The 10KM Run: 10 kilometers unbroken."
  },
  Week_50: {
    technical_boss: "Configure an automated remediation Lambda function triggered by AWS Config rules.",
    physical_boss: "Plank Protocol: 12 minutes accumulated time."
  },
  Week_51: {
    technical_boss: "Root an Insane-level HackTheBox machine using manual enumeration only.",
    physical_boss: "Superman Push-ups: 50 reps."
  },
  Week_52: {
    technical_boss: "Write a professional executive penetration testing report for your Pro Lab compromise.",
    physical_boss: "One Year Anniversary Run: 60 minutes max distance."
  },
  Week_53: {
    technical_boss: "Hunt manually for exposed Microsoft Graph API tokens and illicit consent grants.",
    physical_boss: "Spinning Back Kicks: 100 reps shadowing."
  },
  Week_54: {
    technical_boss: "Extract Service Account tokens from a compromised Kubernetes Pod to escalate privileges.",
    physical_boss: "Dragon Flags: 50 total slow negatives."
  },
  Week_55: {
    technical_boss: "Perform a Cross-Forest Trust attack to forge inter-realm tickets in an AD Pro Lab.",
    physical_boss: "Capoeira Ginga: 20 minutes continuous flow."
  },
  Week_56: {
    technical_boss: "Automate finding exposed .git directories and extract the source code locally.",
    physical_boss: "Explosive High Pull-ups: 50 reps."
  },
  Week_57: {
    technical_boss: "Bypass a 403 Forbidden endpoint using X-Custom-IP-Authorization headers.",
    physical_boss: "Tornado Kicks: 50 reps shadowing."
  },
  Week_58: {
    technical_boss: "Set up persistent C2 beacons using Sliver or Covenant on a compromised host.",
    physical_boss: "Switch Kicks: 100 reps fast pace."
  },
  Week_59: {
    technical_boss: "Exploit a DOM-based XSS via postMessage vulnerabilities.",
    physical_boss: "Pike Push-ups: 100 total reps."
  },
  Week_60: {
    technical_boss: "Write a Semgrep SAST rule to detect hardcoded API keys in a dummy repository.",
    physical_boss: "L-sit Holds: 5 minutes accumulated time."
  },
  Week_61: {
    technical_boss: "Reconstruct frontend source code by extracting logic from exposed .js.map files.",
    physical_boss: "Wall Handstand Push-up Negatives: 30 reps."
  },
  Week_62: {
    technical_boss: "Write an automated script to test 50 prompt injection variations on a local LLM.",
    physical_boss: "Plyometric Clap Push-ups: 100 reps."
  },
  Week_63: {
    technical_boss: "Jailbreak a local offline Ollama model using roleplay DAN prompts.",
    physical_boss: "Sprawl to Jump Squat: 100 reps."
  },
  Week_64: {
    technical_boss: "Test a Web3 GraphQL endpoint for introspection and batching attacks.",
    physical_boss: "Russian Twists: 200 reps with weight."
  },
  Week_65: {
    technical_boss: "Root an Active Hard HTB machine focusing on obscure Linux privilege escalation.",
    physical_boss: "Ghost Crawl: 10 minutes of silent bear crawling."
  },
  Week_66: {
    technical_boss: "Execute a Blind SSRF attack out-of-band using Burp Collaborator.",
    physical_boss: "Silent Precision Jumps: 100 silent landings."
  },
  Week_67: {
    technical_boss: "Abuse Active Directory Certificate Services (AD CS) misconfigured templates.",
    physical_boss: "Fingertip Planks: 5 minutes accumulated."
  },
  Week_68: {
    technical_boss: "Map the microservice architecture of a target to locate internal API endpoints.",
    physical_boss: "Slow-Motion Pistol Squats: 40 reps per leg."
  },
  Week_69: {
    technical_boss: "Find and report an exposed Jenkins or GitLab CI/CD pipeline.",
    physical_boss: "Ninja Rolls: 100 soft shoulder rolls."
  },
  Week_70: {
    technical_boss: "Decode and verify OAuth JWTs to exploit an Account Takeover vulnerability.",
    physical_boss: "Wall Hangs / Fingertip Grip: Max endurance."
  },
  Week_71: {
    technical_boss: "Exploit HTTP Request Smuggling (TE.TE) to bypass front-end security controls.",
    physical_boss: "Blind Single Leg Deadlifts: 50 per leg."
  },
  Week_72: {
    technical_boss: "Write a Pandas script to clean a dataset and handle all missing values.",
    physical_boss: "Crow Pose (Bakasana): 5 minutes accumulated."
  },
  Week_73: {
    technical_boss: "Implement a Linear Regression model completely from scratch in Python.",
    physical_boss: "Wall Walks to Handstand: 20 reps."
  },
  Week_74: {
    technical_boss: "Use Scikit-Learn to train and prune a Decision Tree Classifier.",
    physical_boss: "Tuck Front Lever Prep: Max hold times."
  },
  Week_75: {
    technical_boss: "Use GridSearchCV to tune hyperparameters for a Support Vector Machine.",
    physical_boss: "L-Sit to Tuck Planche Transitions: 30 reps."
  },
  Week_76: {
    technical_boss: "Complete the End-to-End Kaggle Titanic ML project and submit predictions.",
    physical_boss: "Freestanding Handstand Kick-ups: 20 mins practice."
  },
  Week_77: {
    technical_boss: "Build a Multi-Layer Perceptron (MLP) Neural Network for MNIST using PyTorch.",
    physical_boss: "Pseudo Planche Leans: 5 minutes accumulated."
  },
  Week_78: {
    technical_boss: "Rebuild your MNIST model using Convolutional Neural Networks (CNNs).",
    physical_boss: "Hollow Body to V-up Flow: 100 transitions."
  },
  Week_79: {
    technical_boss: "Use Transfer Learning to freeze ResNet18 base layers and train on custom data.",
    physical_boss: "Pike Push-ups on Chair: 100 reps."
  },
  Week_80: {
    technical_boss: "Implement the FGSM Adversarial Attack formula to fool your trained CNN model.",
    physical_boss: "Straddle L-Sit Prep: 5 minutes accumulated."
  },
  Week_81: {
    technical_boss: "Write a python script to extract text embedding vectors and compute Cosine Similarity.",
    physical_boss: "Crow Pose to Chaturanga jump-backs: 50 reps."
  },
  Week_82: {
    technical_boss: "Set up a local ChromaDB Vector Database and perform a Semantic Search query.",
    physical_boss: "Tuck Planche Holds: Max endurance."
  },
  Week_83: {
    technical_boss: "Build a full Python RAG (Retrieval-Augmented Generation) app using LangChain.",
    physical_boss: "Planche Lean Push-ups: 50 reps."
  },
  Week_84: {
    technical_boss: "Execute an Indirect Prompt Injection attack via a maliciously crafted PDF.",
    physical_boss: "Freestanding Handstand: Record 10-second hold."
  },
  Week_85: {
    technical_boss: "Write an automated fuzzer to induce Model Denial of Service via large contexts.",
    physical_boss: "L-Sit Holds: 5 minutes accumulated."
  },
  Week_86: {
    technical_boss: "Create a professional Upwork profile highlighting your custom Python/AI tools.",
    physical_boss: "45-Minute Zen Run: No music, nasal breathing only."
  },
  Week_87: {
    technical_boss: "Build an AI Agent using LangChain equipped with a custom Nmap scanning tool.",
    physical_boss: "The 10-Minute Plank Challenge: Minimal drops."
  },

  // --- PHASE 05 & 06: AI SECURITY & RED TEAMING (Week 88 - Week 137) ---
  Week_88: {
    technical_boss: "Write a web scraper to monitor a target's Bug Bounty scope changes automatically.",
    physical_boss: "Blind Proprioception: 100 Pistol Squats eyes closed."
  },
  Week_89: {
    technical_boss: "Test an AI chatbot to see if it hallucinates vulnerable code (Overreliance).",
    physical_boss: "Sensory Deprivation Push-ups: 100 reps eyes closed."
  },
  Week_90: {
    technical_boss: "Combine your recon scanner with your LangChain AI agent for automated reporting.",
    physical_boss: "50-Minute Zen Walk: Total active observation."
  },
  Week_91: {
    technical_boss: "Run the `garak` vulnerability scanner against a local LLM and analyze the report.",
    physical_boss: "100-Meter Max Sprints: 15 rounds."
  },
  Week_92: {
    technical_boss: "Write a Python script to automate Refusal Suppression attacks against an AI API.",
    physical_boss: "Tornado Jumps: 100 total reps."
  },
  Week_93: {
    technical_boss: "Extract training data (PII) from a model using repetitive prompt structures.",
    physical_boss: "Burpee Broad Jumps: 100 total reps."
  },
  Week_94: {
    technical_boss: "Write a `promptfoo` configuration file to evaluate multiple LLM providers.",
    physical_boss: "Muscle-up Progressions: 50 explosive pull-ups."
  },
  Week_95: {
    technical_boss: "Map decision boundaries by sending thousands of edge-case queries (Model Stealing).",
    physical_boss: "Superman Push-ups: 100 reps."
  },
  Week_96: {
    technical_boss: "Execute an SSRF attack through an AI Agent's web-browsing tool.",
    physical_boss: "Explosive Step-ups: 100 per leg."
  },
  Week_97: {
    technical_boss: "Inject invisible instructions into a malicious HTML page to hijack an AI scraper.",
    physical_boss: "Hill Sprints: 15 rounds max incline."
  },
  Week_98: {
    technical_boss: "Generate a malicious PyTorch `.pkl` file to execute a reverse shell.",
    physical_boss: "Plyometric Lunges: 200 total reps."
  },
  Week_99: {
    technical_boss: "Bypass guardrail string filters by writing a Token Smuggling payload generator.",
    physical_boss: "Sprawl to High Jump: 100 reps."
  },
  Week_100: {
    technical_boss: "Poison the session context window to slowly turn a safe AI malicious.",
    physical_boss: "The 800-Test: 80 Jump Squats, 80 Push-ups, 80 V-ups."
  },
  Week_101: {
    technical_boss: "Automate 'Membership Inference Attacks' by analyzing loss differentials.",
    physical_boss: "Tennis Ball Wall Toss: 30 minutes continuous."
  },
  Week_102: {
    technical_boss: "Write a script to read arbitrary memory off the stack using Format Strings (%p).",
    physical_boss: "Coin Drop Catch: 100 successful catches."
  },
  Week_103: {
    technical_boss: "Execute a GOT Overwrite using %n to hijack execution flow in a binary.",
    physical_boss: "Juggling Basics: 20 minutes continuous cascade."
  },
  Week_104: {
    technical_boss: "Instrument a vulnerable C program with AFL++ and find a crash dump.",
    physical_boss: "Peripheral Vision Catch: 100 reps."
  },
  Week_105: {
    technical_boss: "Execute a Fastbin Dup (Double Free) attack in GDB to corrupt the heap.",
    physical_boss: "Tennis Ball Wall Toss (One-Legged): 20 mins."
  },
  Week_106: {
    technical_boss: "Analyze a piece of safely contained malware statically using PEstudio.",
    physical_boss: "Coin Drop Catch (Alternate Hand): 100 reps."
  },
  Week_107: {
    technical_boss: "Write a Process Injector in C to understand how attackers hide code in memory.",
    physical_boss: "Juggling (Advanced Pace): 20 mins max speed."
  },
  Week_108: {
    technical_boss: "Extract a consumer router filesystem using binwalk and analyze its httpd binary.",
    physical_boss: "Reaction Ball Drills: 100 random bounces."
  },
  Week_109: {
    technical_boss: "Emulate IoT firmware locally using qemu-user-static to test a buffer overflow.",
    physical_boss: "Coin Drop Catch (Blind Kickoff): 100 reps."
  },
  Week_110: {
    technical_boss: "Exploit a Server-Side Request Forgery leading to AWS metadata exfiltration.",
    physical_boss: "Tennis Ball Toss (Varying Distance): 20 mins."
  },
  Week_111: {
    technical_boss: "Find and exploit a Web Cache Poisoning vulnerability using unkeyed headers.",
    physical_boss: "Juggling (Alternate Stances): 20 mins."
  },
  Week_112: {
    technical_boss: "Execute a Cross-Site Request Forgery (CSRF) bypassing SameSite cookies.",
    physical_boss: "Peripheral Reflex Drop: 100 double catches."
  },
  Week_113: {
    technical_boss: "Write a Python fuzzer that iterates through 100 SSRF bypass strings for AI prompts.",
    physical_boss: "Cognitive Juggling (Math): 20 mins."
  },
  Week_114: {
    technical_boss: "Execute an Insecure Deserialization attack in Java or Python (Pickle).",
    physical_boss: "Reaction Ball Wall Throws: 100 reps."
  },
  Week_115: {
    technical_boss: "Map the GraphQL architecture of a target using introspection queries and Voyager.",
    physical_boss: "Blind Proprioception Walk: 20 mins."
  },
  Week_116: {
    technical_boss: "Bypass AWS WAF using request smuggling or encoding techniques.",
    physical_boss: "Coin Drop Catch (Double Catch): 100 reps."
  },
  Week_117: {
    technical_boss: "Deploy a RAG app locally and break it using Indirect Prompt Injection.",
    physical_boss: "Tennis Ball Toss (Cognitive Load): 20 mins."
  },
  Week_118: {
    technical_boss: "Hunt for Multi-Modal AI vulnerabilities (Image/Audio generation bypassing).",
    physical_boss: "Heavy Carry (Bear Hug): 400m with 20kg."
  },
  Week_119: {
    technical_boss: "Write a Semgrep SAST rule to detect Command Injection in open-source AI tools.",
    physical_boss: "Kong Vault Progressions: 100 reps."
  },
  Week_120: {
    technical_boss: "Identify and exploit an unauthenticated Kubelet API on Port 10250.",
    physical_boss: "Trail Running: 60 minutes uneven terrain."
  },
  Week_121: {
    technical_boss: "Escape a privileged Kubernetes Pod to the underlying Node via mounted directories.",
    physical_boss: "Natural Grip Hangs: Max time from a tree."
  },
  Week_122: {
    technical_boss: "Perform a Reentrancy Attack on a vulnerable Solidity Smart Contract.",
    physical_boss: "Environmental Lifting: 50 heavy rock lifts."
  },
  Week_123: {
    technical_boss: "Complete Ethernaut Levels 1-5 focusing on Access Control and Integer Overflows.",
    physical_boss: "Heavy Rucking: 90 mins with 20kg."
  },
  Week_124: {
    technical_boss: "Spin up a distributed Axiom fleet and run a massive subfinder/httpx scan.",
    physical_boss: "Balance Walk: 30 minutes on a narrow curb."
  },
  Week_125: {
    technical_boss: "Write a Python script to parse Axiom output and send Slack/Discord notifications.",
    physical_boss: "Barefoot Grounding Run: 30 minutes."
  },
  Week_126: {
    technical_boss: "Audit a Web3 DApp frontend for classic Web2 vulnerabilities interacting with wallets.",
    physical_boss: "Farmer's Walks: 10 rounds heavy carry."
  },
  Week_127: {
    technical_boss: "Execute a Flash Loan Attack in a local hardhat/foundry test environment.",
    physical_boss: "Trail Sprint Intervals: 15 rounds."
  },
  Week_128: {
    technical_boss: "Run Slither static analyzer against a smart contract and patch the findings.",
    physical_boss: "Parkour Safety Rolls: 100 smooth rolls."
  },
  Week_129: {
    technical_boss: "Perform an advanced HTTP/2 Request Smuggling Downgrade Attack.",
    physical_boss: "Weighted Backpack Lunges: 100 per leg."
  },
  Week_130: {
    technical_boss: "Analyze a Zero-Day vulnerability in a popular WordPress plugin locally.",
    physical_boss: "Tree Climbing: 30 minutes functional strength."
  },
  Week_131: {
    technical_boss: "Write the exploit PoC for a discovered Zero-Day and draft the MITRE CVE request.",
    physical_boss: "Urban Agility Flow: 20 continuous circuits."
  },
  Week_132: {
    technical_boss: "Bypass a Web Application Firewall using HTTP Parameter Pollution (HPP).",
    physical_boss: "Grass Sprints: 20 rounds 50m."
  },
  Week_133: {
    technical_boss: "Execute a DOM-based XSS attack using postMessage misconfigurations.",
    physical_boss: "Grandmaster Flow: 30 minutes continuous."
  },
  Week_134: {
    technical_boss: "Exploit an XML External Entity (XXE) to perform out-of-band data exfiltration.",
    physical_boss: "Grandmaster Isometrics: 5 circuits."
  },
  Week_135: {
    technical_boss: "Hunt for 'Unchecked Call Return Values' in an Immunefi Web3 target.",
    physical_boss: "Grandmaster Stealth: 30 mins silent movement."
  },
  Week_136: {
    technical_boss: "Perform a 'Self Destruct' attack to force Ether into a contract and break its logic.",
    physical_boss: "Grandmaster Pulling: 100 strict pullups."
  },
  Week_137: {
    technical_boss: "Write a malicious payload that triggers an AI DoS (Sponge Example) via complex JSON.",
    physical_boss: "Grandmaster Explosive: 10 continuous circuits."
  },

  // --- PHASE 07: MASTERY, LEGACY & EMPIRE BUILDING (Week 138 - Week 156) ---
  Week_138: {
    technical_boss: "Set up your LLC / Agency structure and draft professional SoW and NDA templates.",
    physical_boss: "The 1000-Rep Challenge: 250 Pushups, 250 Squats, 250 Situps, 250 Burpees."
  },
  Week_139: {
    technical_boss: "Write and compile a Loadable Kernel Module (LKM) and load it using insmod.",
    physical_boss: "Absolute Recovery: 60 minutes deep mobility."
  },
  Week_140: {
    technical_boss: "Debug a Kernel Stack Buffer Overflow using QEMU and GDB to find the offset.",
    physical_boss: "Neuro-Reflex Reset: 20 minutes Wall Toss."
  },
  Week_141: {
    technical_boss: "Execute a commit_creds(prepare_kernel_cred(0)) payload to get a root kernel shell.",
    physical_boss: "Grandmaster Flow: Juggling, Boxing, Handstand."
  },
  Week_142: {
    technical_boss: "Set up a professional Calendly link and execute a discovery call for pentesting.",
    physical_boss: "Blind Proprioception Walk: 15 minutes."
  },
  Week_143: {
    technical_boss: "Write a technical blog post detailing a complex chain of bugs or a CVE discovery.",
    physical_boss: "Active Recovery: Tai Chi and Vipassana."
  },
  Week_144: {
    technical_boss: "Host your final Pentesting/AI Portfolio securely on AWS S3 with a custom domain.",
    physical_boss: "Coin Drop Catch (Double Cross): 100 reps."
  },
  Week_145: {
    technical_boss: "Participate in a Live Hacking Event (LHE) or a 12-hour simulated bug bounty sprint.",
    physical_boss: "Reaction Ball Drills: 100 catches."
  },
  Week_146: {
    technical_boss: "Publish your '1095 Days of Relentless Execution' story on LinkedIn and Reddit.",
    physical_boss: "Grandmaster Tufan: 15 rounds Hill Sprints."
  },
  Week_147: {
    technical_boss: "Identify and report a high-impact BOLA/IDOR vulnerability on a live program.",
    physical_boss: "Cognitive Juggling: 20 minutes reverse counting."
  },
  Week_148: {
    technical_boss: "Use Burp Suite Autorize to map an entire API structure for Broken Access Control.",
    physical_boss: "Peripheral Focus Tracking: 20 minutes."
  },
  Week_149: {
    technical_boss: "Perform a highly targeted, manual recon phase utilizing OSINT on employees.",
    physical_boss: "Tennis Ball Wall Toss (One-Legged): 20 minutes."
  },
  Week_150: {
    technical_boss: "Exploit a misconfigured GitHub Actions runner to leak AWS/GCP production secrets.",
    physical_boss: "Juggling (Advanced Pace): 20 minutes max speed."
  },
  Week_151: {
    technical_boss: "Execute a Blind OS Command Injection utilizing DNS exfiltration.",
    physical_boss: "Grandmaster Isometrics: 6 continuous circuits."
  },
  Week_152: {
    technical_boss: "Write a Streamlit GUI wrapper for all your custom CLI reconnaissance tools.",
    physical_boss: "Reaction Ball Wall Throws: 100 reps."
  },
  Week_153: {
    technical_boss: "Map a Web3 application's interactions with an Ethereum node looking for logic flaws.",
    physical_boss: "Grandmaster Stealth: 30 minutes silent movement."
  },
  Week_154: {
    technical_boss: "Review your entire Bug Bounty tracker. Format and submit all pending reports.",
    physical_boss: "The Reflex & Statics Test: Juggling to Handstand."
  },
  Week_155: {
    technical_boss: "Back up your entire Kali VM, master cheatsheets, and exploit scripts securely.",
    physical_boss: "100 Perfect Push-ups: Ultimate mind-muscle connection."
  },
  Week_156: {
    technical_boss: "Launch your agency. Close all books. You are a Master Hacker and AI Red Teamer.",
    physical_boss: "GRANDMASTER INITIATION: 1 Mile Run, 100 Pullups, 200 Pushups, 300 Squats, 5-Min Plank, 15 Mins Juggling."
  }
};