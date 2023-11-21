document.addEventListener('DOMContentLoaded', function () {
  const terminalBody = document.getElementById('terminal-body');
  const userInput = document.getElementById('userInput');

  let typed = new Typed('.typed-text', {
    strings: ["Welcome. Either type -h or help for current commands"],
    typeSpeed: 40
  });

  const commands = {
    '-a' : 'about',
    'about' : 'about',
    '-h': 'help',
    'ls':'help',
    'help': 'help',
    '-s': 'skills',
    'skills': 'skills',
    '-p': 'papers',
    'papers': 'papers',
    '-pro': 'projects',
    'projects': 'projects',
    '-c': 'contact',
    'contact': 'contact',
    '-cert': 'certificates',
    'certificates': 'certificates',
    '-wo': 'workshops',
    'workshops': 'workshops',
    'clear': 'clear',
    'cls' : 'clear'
  };
  

  userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const command = userInput.value.toLowerCase().trim();
      userInput.value = ''; // Clear input after pressing Enter

      const terminalRow = document.createElement('div');
      terminalRow.classList.add('col');

      const terminalCol1 = document.createElement('div');
      terminalCol1.classList.add('col');
      terminalCol1.innerHTML = '<span class="typed-text"></span>';
      terminalRow.appendChild(terminalCol1);


      terminalBody.appendChild(terminalRow);

      const selectedCommand = commands[command];
      if (selectedCommand) {
        processCommand(selectedCommand);
      } else {
        addOutputToTerminal('Command not recognized. Type "help" for available commands.');
      }
    }
  });

  function addOutputToTerminal(output) {
    const newLine = document.createElement('div');

    // Checking if output is a string or an element
    if (typeof output === 'string') {
      newLine.innerHTML = output;
    } else {
      newLine.appendChild(output);
    }
  
    terminalBody.lastElementChild.firstElementChild.appendChild(newLine);
    userInput.focus();
  }
  
  

  function processCommand(input) {
    switch (input) {
      case 'help':
        clearTerminal(); 
        addOutputToTerminal('Available commands:');
        addOutputToTerminal('-a or about');
        addOutputToTerminal('-h or ls or help');
        addOutputToTerminal('-s or skills');
        addOutputToTerminal('-p or papers');
        addOutputToTerminal('-pro or projects');
        addOutputToTerminal('-c or contact');
        addOutputToTerminal('-cert or certificates');
        addOutputToTerminal('-wo or workshops');
        addOutputToTerminal('cls or clear');
        
        break;


        case 'about':
          clearTerminal(); 
          addOutputToTerminal('I am Hounaar, a Data Scientist, A Cyber Security Engineer, BackEnd Developer');
         
          
          break;

      case 'skills':
        clearTerminal(); 
        addOutputToTerminal('HTML&CSS, PHP, Python, Java, Perl, Bash, Jupyter Notebook, MySQL, SQL Server, Oracle, Nginx, Jenkins, Kerio, Zabbix, Splunk, Burp suite, Metasploit, Redis, Docker, Git, REST API, Power BI, Quartus, Cisco Packet Tracer, Windows Server, Linux');
        break;


        case 'papers':
          clearTerminal();
        
          addOutputToTerminal('An analysis on Vulnerability appraisals in web');
          addOutputToTerminal('This article will direct you to the most proficient method to get your site against normal PHP weaknesses.');
          
          const downloadLink = document.createElement('a');
          downloadLink.href = '/src/files/vuls.pdf'; // Replace with the actual file path or URL
          downloadLink.textContent = 'Download';
          downloadLink.download = 'vuls.pdf'; // Specify the file name with extension
          addOutputToTerminal(downloadLink);
          
          addOutputToTerminal('----------------');
          
          addOutputToTerminal('Data mining Usage in CRM');
          addOutputToTerminal('This article describes how recent advancements in data technology and the internet have led to a significant shift in communication and advertising strategies.');
          
          const downloadLink2 = document.createElement('a');
          downloadLink2.href = '/src/files/dm.pdf'; // Replace with the actual file path or URL
          downloadLink2.textContent = 'Download';
          downloadLink2.download = 'dm.pdf'; // Specify the file name with extension
          addOutputToTerminal(downloadLink2);
          
          addOutputToTerminal('----------------');
          
          addOutputToTerminal('Synergy of Blockchain');
          addOutputToTerminal('This essay explores the synergy between blockchain and artificial intelligence (AI), showcasing their transformative potential in various industries.');
          
          const downloadLink3 = document.createElement('a');
          downloadLink3.href = '/src/files/block.pdf'; // Replace with the actual file path or URL
          downloadLink3.textContent = 'Download';
          downloadLink3.download = 'block.pdf'; // Specify the file name with extension
          addOutputToTerminal(downloadLink3);
          break;
        
        


        case 'projects':
          clearTerminal();
          addOutputToTerminal('List of projects:');
          addOutputToTerminal('1. Hounaar Toolkit');
          addOutputToTerminal('This project is a Python script which presents services such as Data Analysis AI, Type Rover, Net Scanner, Rootkit Scanner, YouTube Downloader, and Cryptocurrencies price checker.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('2. Hounaar EAI');
          addOutputToTerminal('This project is an Explorer AI which explores if only it did not know the answer.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('3. RX7');
          addOutputToTerminal('RX7 is a Perl script that demonstrates various functionalities, including bioinformatics tasks, data encryption/decryption, and simulated IoT data collection and control.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('4. SAPCO');
          addOutputToTerminal('This Project is SAPCO’s Transportation system, Human Resources and Education System analysis.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('5. Hounaar Webs');
          addOutputToTerminal('This project includes 4 main projects: Blue pearl (an online chat portal form), Enigma (an online riddle game), Ketab Arzooni (an online book order platform), Abie Motlagh (an online book store), and an Online Dictionary.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('6.Ceasar');
          addOutputToTerminal('This is a collection of command-line scripts in Python, C++, and Perl for encoding and decoding text files using the Caesar cipher.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('7. Analysis Workflows');
          addOutputToTerminal('This project includes 3 separate analyses: SCM, Crypto Currency, and BMW price in years are the three main workflows that made this project.');
          const workflowImg1 = document.createElement('img');
          workflowImg1.src = '/src/pics/1.jpg'; // Replace with the actual image path or URL for the first image
          workflowImg1.classList.add('img-fluid');
          addOutputToTerminal(workflowImg1);

          const workflowImg2 = document.createElement('img');
          workflowImg2.src = '/src/pics/2.jpg'; // Replace with the actual image path or URL for the second image
          workflowImg2.classList.add('img-fluid');
          addOutputToTerminal(workflowImg2);
                  
          addOutputToTerminal('----------------');

          addOutputToTerminal('8. PHPortal');
          addOutputToTerminal('PHPortal is a lightweight PHP library that provides a simple and consistent interface for working with various database systems, including MySQL, SQL Server, and Oracle.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('9. Huffman Algorithm');
          addOutputToTerminal('This task is the Huffman algorithm written in Py, PHP, C++, Perl, Java, and Js programming languages which will implement Huffman algorithm to a text.');
          addOutputToTerminal('----------------');

          addOutputToTerminal('10. Hounaar Programming Language');
          addOutputToTerminal('Hounaar is a beginner-friendly and minimalist programming language designed for ease of use and quick scripting. Below, you\'ll find an overview of its syntax and key features.');
          
          addOutputToTerminal('----------------');

          addOutputToTerminal('11. Txt Summarizer');
          addOutputToTerminal('This code provides a user-friendly tool for summarizing text files in PDF, DOCX, or TXT formats. It utilizes external libraries to extract text from the respective file formats and then generates a concise summary using text summarization techniques. The user simply needs to provide the path to the file, and the code handles the rest, making it a convenient and straightforward way to extract the essence of various text documents.');
          
          break;
      case 'contact':
        clearTerminal(); 

      addOutputToTerminal('You can email to:');
      const downloadLink4 = document.createElement('a');
          downloadLink4.href = 'mailto:parsabe99@outlook.com'; // Replace with the actual file path or URL
          downloadLink4.textContent = 'Email'; // Specify the file name with extension
          addOutputToTerminal(downloadLink4);

    const downloadLink5 = document.createElement('a');
          downloadLink5.href = 'https://github.com/hounaar'; // Replace with the actual file path or URL
          downloadLink5.textContent = 'Github'; // Specify the file name with extension
          addOutputToTerminal(downloadLink5);

    const downloadLink6 = document.createElement('a');
          downloadLink6.href = 'https://www.kaggle.com/datasets/xvorte'; // Replace with the actual file path or URL
          downloadLink6.textContent = 'Kaggle'; // Specify the file name with extension
          addOutputToTerminal(downloadLink6);


        break;
      
      
        case 'certificates':
          clearTerminal();
          addOutputToTerminal('Automated Machine Learning - Udemy');
          addOutputToTerminal('Machine Learning using AWS - Udemy');
          addOutputToTerminal('Deep learning in Python - Udemy');
          addOutputToTerminal('Big Data implementation - Udemy');
          addOutputToTerminal('SEO Fundamentals - Cando Training Center');
          addOutputToTerminal('Microsoft MCSE - Cando Training Center');
          addOutputToTerminal('CompTIA Network+ - Cando Training Center');
          addOutputToTerminal('CISCO CCNA - Cando Training Center');
          addOutputToTerminal('Power BI Automation - Udemy');
      
          break;


          case 'workshops':
            clearTerminal();
            addOutputToTerminal('List of workshops:');
            addOutputToTerminal('1. SCM (April 2023)');
            addOutputToTerminal('Small and Medium-Sized Enterprises (SMEs) have major difficulties in implementing Supply Chain Management (SCM) strategy.');
            addOutputToTerminal('2. STP Protocol (Sep 2022)');
            addOutputToTerminal('STP is an organization convention that forms a circle free coherent geography for Ethernet organizations.');
            addOutputToTerminal('3. ADDS Fundamentals (Dec 2022)');
            addOutputToTerminal('Active Directory Domain Services (AD DS) provide the cornerstone of identity and access solutions in Windows Server 2016.');
            addOutputToTerminal('4. Project Managing (July 2022)');
            addOutputToTerminal('It’s been said for a purpose to accomplish, a good inducement. In this workshop, I have explained these sufficient ways.');
            addOutputToTerminal('5. SEO Algorithms (Oct 2022)');
            addOutputToTerminal('Search Engine Optimization (SEO) is the most common way of working on the quality and amount of site traffic.');
            addOutputToTerminal('6. QCA (April 2019)');
            addOutputToTerminal('I have explained in this workshop about an abstract model of quantum computing that is similar to the typical models of cellular automata.');
            break;
      case 'clear':
        clearTerminal();
        break;
      default:
        addOutputToTerminal('Command not recognized. Type "help or -h" for available commands.');
        break;
    }
  }

  function clearTerminal() {
    const userInput = document.getElementById('userInput');

    // Clear terminal output
    terminalBody.innerHTML = '';

    // Restore the input field within the same row
    const terminalRow = document.createElement('div');
    terminalRow.classList.add('col');

    const terminalCol1 = document.createElement('div');
    terminalCol1.classList.add('col');
    terminalCol1.innerHTML = '<span class="typed-text"></span><br/>';
    terminalRow.appendChild(terminalCol1);

    const terminalCol2 = document.createElement('div');
    terminalCol2.classList.add('col');
    terminalCol2.innerHTML = '<span class="terminaler"><b>(root@hounaar) - # </b></span>';
    terminalCol2.appendChild(userInput);
    terminalRow.appendChild(terminalCol2);

    terminalBody.appendChild(terminalRow);

    // Place cursor in the input field
    userInput.focus();
  }
});
