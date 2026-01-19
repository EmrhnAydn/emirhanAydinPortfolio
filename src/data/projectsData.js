// Proje Veri Yapısı
// Bu dosyayı düzenleyerek kendi projelerinizi ekleyebilirsiniz

export const projects = [


    {
        id: 'liftUp',
        title: {
            en: 'Locally Runnable DeepResearch-Enabled Search Engine for TAI LIFT-UP',
            tr: 'TUSAŞ LIFT-UP için Lokalde Çalışabilen DeepResearch Özellikli Arama Motoru'
        },
        description: {
            en: 'A locally running RAG-based search engine for internal documents developed within the scope of the TAI LIFT-UP graduation project',
            tr: 'TUSAŞ LIFT-UP Bitirme projesi kapsamında geliştirilen Kurum içi dökümanlar için RAG Tabanlı lokalde çalışan arama motoru'
        },
        tech: ['RAG', 'LangChain', 'LLM', 'Ai Agents', 'Python', 'VectorDB', 'DeepResearch'],
        github: null,
        images: [],
        liveUrl: null,
        visibility: 'private',
        longDescription: {
            en: '',
            tr: ''
        }
    },

    {
        id: 'MufettisAgent',
        title: {
            en: 'E-Commerce Website and Structural RAG-Based Agentic Chatbot',
            tr: 'E-Ticaret Sitesi ve Yapısal RAG Tabanlı Ajantik Chatbot'
        },
        description: {
            en: 'e-commerce chatbot with a 5-agent architecture, developed for BTK Hackathon 2025, running on the Gemini 1.5 API with a limited token budget',
            tr: 'BTK Hackhathon 2025 için geliştirilmiş gemini 1.5 apisiinin kısıtlı tokenıyla çalışan 5 ajan mimarili e-ticaret Chatbotu'
        },
        tech: ['Python', 'LangChain', 'RAG', 'SqLite', 'flask', 'LLM'],

        // GitHub bilgileri (opsiyonel)
        github: {
            url: 'https://github.com/EmrhnAydn/mufettisAgent',
            owner: 'EmrhnAydn',
            repo: 'mufettisAgent',
            showReadme: true
        },

        // Görseller (opsiyonel) - public klasöründe saklanacak
        images: [
            '/projects/mufettisAgent/1.jpeg',
            '/projects/mufettisAgent/2.jpeg',
            '/projects/mufettisAgent/3.jpeg',
            '/projects/mufettisAgent/5.jpeg',
            '/projects/mufettisAgent/4.jpeg'
        ],

        // Demo/Live site linki (opsiyonel)
        liveUrl: null,

        // Proje görünürlüğü: 'public' | 'private'
        visibility: 'public',

        // Modal için uzun açıklama
        longDescription: {
            en: 'neoTwins is a modern e-commerce assistant platform powered by Google Gemini AI that understands users’ natural-language requests and provides intelligent product recommendations. By using a multi-agent system, it personalizes the user experience and simplifies the shopping process.🤖 AI-Powered Assistant: Natural language processing with Google Gemini 1.5 integration\n🛍️ Smart Product Recommendations: Personalized suggestions based on user preferences\n🔍 Advanced Search: Categorized and filtered product search\n🛒 Cart Management: User-friendly cart operations\n👤 User Management: Secure JWT-based authentication  \n🎯 4-Stage Agent System: User Analysis → Category Matching → Product Research → Recommendations\n📱 Responsive Design: Modern React + Tailwind CSS interface\n🐳 Docker Support: Easy deployment and scalability',
            tr: 'neoTwins, kullanıcıların doğal dilde yaptıkları istekleri anlayarak akıllı ürün önerileri sunan, Google Gemini AI ile güçlendirilmiş modern bir e-ticaret asistan platformudur. Çoklu agent sistemi kullanarak kullanıcı deneyimini kişiselleştirir ve alışveriş sürecini kolaylaştırır.🤖 AI-Powered Asistan: Google Gemini 1.5 entegrasyonu ile doğal dil işleme\n🛍️ Akıllı Ürün Önerileri: Kullanıcı tercihlerine göre kişiselleştirilmiş öneriler\n🔍 Gelişmiş Arama: Kategorize edilmiş ve filtrelenmiş ürün arama\n🛒 Sepet Yönetimi: Kullanıcı dostu sepet işlemleri\n👤 Kullanıcı Yönetimi: JWT tabanlı güvenli authentication\n🎯 4-Aşamalı Agent Sistemi: User Analysis → Category Matching → Product Research → Recommendations\n📱 Responsive Design: Modern React + Tailwind CSS arayüzü\n🐳 Docker Desteği: Kolay deployment ve ölçeklenebilirlik'
        }
    },

    {
        id: 'CoffeeChatbot-LocalLLM',
        title: {
            en: 'Agentic Coffee Chatbot with Local LLM',
            tr: 'Yerel LLM ile Ajantik Kafe Chatbotu'
        },
        description: {
            en: 'In the Agentic Café Chatbot project using a local LLM, users can chat with the chatbot and, with attention to natural language, add and remove any number of products to and from the cart, make purchases, and receive coffee recommendations; free APIs from platforms such as Groq and Ollama were used, along with FAISS and LangChain.',
            tr: 'Yerel LLM ile Ajantik Kafe Chatbotu projesinde kullanıcı chatbot ile sohbet ederek doğal dile dikkat edilerek sepete istenilen kadar ürün ekleme ve çıkarma, satın alma, kavhe önerme gibi özellikler sunulmuştur groq ve ollama gibi api plartformlarından ücretsiz apiler ve faiss ve langchain kullanılmıştır.'
        },
        tech: ['C#', 'ASP.NET Core', 'Firebase'],
        github: null,
        images: [],
        liveUrl: null,
        visibility: 'private',
        longDescription: {
            en: '',
            tr: ''
        }
    },


    {
        id: 'llamaCultureChatbot',
        title: {
            en: 'Llama Entelectuel Chatbot',
            tr: 'Llama Entelektüel Chatbot'
        },
        description: {
            en: 'A terminal-based AI chatbot specialized in History, Art, and Cinema. It operates in two different modes: Basic mode and an advanced mode with LangChain integration.',
            tr: 'Tarih, Sanat ve Sinema konularında uzmanlaşmış terminal tabanlı AI sohbet botu. İki farklı modda çalışır: Basit mod ve LangChain entegrasyonlu gelişmiş mod.'
        },
        tech: ['RAG', 'LangChain', 'LLM', 'Python', 'Flask', 'FAISS'],
        github: null,
        images: [],
        liveUrl: null,
        visibility: 'private',
        longDescription: {
            en: '',
            tr: ''
        }
    },


    {
        id: 'Generate-Resume-LLM-Key-website',
        title: {
            en: 'Aspnet Core Web Application with React for Resume Generator',
            tr: 'Aspnet Core Web Uygulaması ile React için Özgeçmiş Oluşturucu'
        },
        description: {
            en: 'Docker deployment with Aspnet Core Web Application with React for Resume Generator',
            tr: 'Docker ile Aspnet Core Web Uygulaması ile React için Özgeçmiş Oluşturucu'
        },
        tech: ['Aspnet Core', 'React', 'Docker', 'LLM'],
        github: {
            url: 'https://github.com/EmrhnAydn/Generate-Resume-LLM-Key',
            owner: 'EmrhnAydn',
            repo: 'Generate-Resume-LLM-Key',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'Docker deployment with Aspnet Core Web Application with React for Resume Generator',
            tr: 'Docker ile Aspnet Core Web Uygulaması ile React için Özgeçmiş Oluşturucu'
        }
    },


    {
        id: 'normalizationE-CommerceDb',
        title: {
            en: 'Normalization E-Commerce Db',
            tr: 'Normalizasyon E-Commerce Db'
        },
        description: {
            en: 'Normalization E-Commerce Db For BTK Hackhathon 2025',
            tr: 'BTK Hackhathon 2025 için Normalizasyon E-Commerce Db'
        },
        tech: ['Flask', 'Python', 'SqLite'],
        github: {
            url: 'https://github.com/EmrhnAydn/normalizationE-CommerceDb',
            owner: 'EmrhnAydn',
            repo: 'normalizationE-CommerceDb',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'Normalization E-Commerce Db For BTK Hackhathon 2025',
            tr: 'BTK Hackhathon 2025 için Normalizasyon E-Commerce Db'
        }
    },


    {
        id: 'fleetManagerRobotSimulation',
        title: {
            en: 'Fleet Manager Robot Simulation in Matlab App Desinger',
            tr: 'Matlab App Desinger ile Filo Yönetim Robot Simülasyonu'
        },
        description: {
            en: 'This project is an advanced MATLAB application offering a comprehensive fleet management and simulation environment for multi-robot systems. It allows users to create dynamic map scenarios, manage autonomous mobile robots (AMR), and analyze the performance of various path planning algorithms.',
            tr: 'Bu proje, çoklu robot sistemleri için kapsamlı bir filo yönetim ve simülasyon ortamı sunan gelişmiş bir MATLAB uygulamasıdır. Kullanıcılara dinamik harita senaryoları oluşturma, otonom mobil robotları (AMR) yönetme ve çeşitli rota planlama algoritmalarının performansını analiz etme imkanı tanır.'
        },
        tech: ['Matlab', 'App Desinger', 'Simulink'],

        // GitHub bilgileri (opsiyonel)
        github: {
            url: 'https://github.com/EmrhnAydn/fleetManagerRobotSimulation',
            owner: 'EmrhnAydn',
            repo: 'fleetManagerRobotSimulation',
            showReadme: true
        },

        // Görseller (opsiyonel) - public klasöründe saklanacak
        images: [
            '/projects/fleetManagerRobotSimulation/random_map_gui.png',
            '/projects/fleetManagerRobotSimulation/dar_koridor_modu.png',
            '/projects/fleetManagerRobotSimulation/filo_analiz_raporu.png'
        ],

        // Demo/Live site linki (opsiyonel)
        liveUrl: null,

        // Proje görünürlüğü: 'public' | 'private'
        visibility: 'public',

        // Modal için uzun açıklama
        longDescription: {
            en: 'About the Project Fleet Manager is developed to model and optimize the behavior of autonomous robots (AMR) in industrial warehouse and factory environments. Built on the MATLAB App Designer infrastructure, the project enables easy testing of complex algorithms through a user-friendly interface.The system serves as an ideal testbed for research and development in path planning, collision avoidance, and multi-agent coordination.',
            tr: 'Fleet Manager, endüstriyel depo ve fabrika ortamlarında çalışan otonom robotların davranışlarını modellemek ve optimize etmek amacıyla geliştirilmiştir. MATLAB App Designer altyapısı üzerine inşa edilen proje, kullanıcı dostu arayüzü ile karmaşık algoritmaların kolayca test edilmesini sağlar. Sistem, yol planlama (path planning), çarpışma önleme (collision avoidance) ve çoklu ajan koordinasyonu (multi-agent coordination) konularında araştırma ve geliştirme için ideal bir test yatağıdır.'
        },
    },









    {
        id: 'Zoo-Classifaction',
        title: {
            en: 'Zoo Classifaction Model in Flask Web Site',
            tr: 'Flask Web uygulaması ile Hayvan Sııflandırma'
        },
        description: {
            en: 'Zoo classifaction with ViT',
            tr: 'ViT ile Hayvan Sııflandırma'
        },
        tech: ['Flask', 'Python', 'ViT', 'Machine Learning', 'HTML', 'CSS'],
        github: {
            url: 'https://github.com/EmrhnAydn/ZooClassifactionWebApp',
            owner: 'EmrhnAydn',
            repo: 'ZooClassifactionWebApp',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'Zoo classifaction with ViT',
            tr: 'ViT ile Hayvan Sııflandırma'
        }
    },



    {
        id: 'test-data-creator',
        title: {
            en: 'Web Scraping for Zoo Classifaction Test Data',
            tr: 'Hayvan Sınıflandırması için Test Verisi Web Kazıma Uygulaması'
        },
        description: {
            en: 'Since no test data was shared for the given project, a web scraping application is used to generate test data in addition to validation. Based on this code, test data can also be generated for other projects.',
            tr: 'Verilen projede test verisi paylaşılmadığı için validationın yanı sıra test verisi oluşturmak için web kazıma uygulaması. Bu kod temel alınarak diğer projeler için de test verisi oluşturulabilir.'
        },
        tech: ['Web Scraping', 'Python'],
        github: {
            url: 'https://github.com/EmrhnAydn/emirhanAydinPortfolio',
            owner: 'EmrhnAydn',
            repo: 'emirhanAydinPortfolio',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'Since no test data was shared for the given project, a web scraping application is used to generate test data in addition to validation. Based on this code, test data can also be generated for other projects.',
            tr: 'Verilen projede test verisi paylaşılmadığı için validationın yanı sıra test verisi oluşturmak için web kazıma uygulaması. Bu kod temel alınarak diğer projeler için de test verisi oluşturulabilir.'
        }
    },


    {
        id: 'paperAnonymization',
        title: {
            en: 'Paper Anonymization and Journal Review',
            tr: 'Makale Anonimleştirme ve Dergi Hakemliği'
        },
        description: {
            en: 'This project is designed to Flask and SQLite. It determines the area of ​​expertise of the article with NLP and ensures that it is directed to the appropriate referee. It encrypts the information of the article authors with AES and detects and blurs the images of the authors with Poppler. In this way, anonymization is ensured in the articles sent to the referee.',
            tr: 'Bu proje Flask ve SQLite kullanılarak tasarlanmıştır. NLP ile makalenin uzmanlık alanını belirler ve uygun hakeme yönlendirilmesini sağlar. Makale yazarlarının bilgilerini AES ile şifreler ve Poppler kullanarak yazarların görsellerini tespit edip bulanıklaştırır. Bu sayede hakeme gönderilen makalelerde anonimleştirme sağlanır.'
        },
        tech: ['Flask', 'Python', 'SQLite', 'NLP', 'AES', 'Poppler'],
        github: {
            url: 'https://github.com/EmrhnAydn/paperAnonymization',
            owner: 'EmrhnAydn',
            repo: 'paperAnonymization',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'A modern, responsive portfolio website showcasing my projects and skills.',
            tr: 'Projelerimi ve yeteneklerimi sergileyen modern, responsive portfolyo sitesi.'
        }
    },




    {
        id: 'threadProject',
        title: {
            en: 'Stock simulation with using Threads, Mutex and Semafor',
            tr: 'Thread, Mutex ve Semafor ile Stock Simülasyonu'
        },
        description: {
            en: 'A university project: a multithreaded application that creates a stock simulation with advanced C#, ensuring data safety by using Thread, Mutex, and Semaphore.',
            tr: 'İleri C# ile Stock Simülasyonu oluşturup Thread, Mutex ve Semafor kullanarak  veri güvenliği sağlandığı multithread uygulaması üniversite projesi'
        },
        tech: ['C#', 'Thread', 'Mutex', 'Semaphore', 'SQL'],
        github: {
            url: 'https://github.com/EmrhnAydn/threadProject',
            owner: 'EmrhnAydn',
            repo: 'threadProject',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'A university project: a multithreaded application that creates a stock simulation with advanced C#, ensuring data safety by using Thread, Mutex, and Semaphore.',
            tr: 'İleri C# ile Stock Simülasyonu oluşturup Thread, Mutex ve Semafor kullanarak  veri güvenliği sağlandığı multithread uygulaması üniversite projesi'
        }
    },



    {
        id: 'Turkish-NLP-SentimentAnalysis',
        title: {
            en: 'Turkish NLP Sentiment Analysis',
            tr: 'Türkçe NLP Duygu Analizi'
        },
        description: {
            en: 'Turkish NLP Sentiment Analysis project in NLP Fundimentals couerse',
            tr: 'BTK Akademi Doğal Dil işlemeye giriş kursunda yaptığım giriş seviyesinde bir proje'
        },
        tech: ['Python', 'NLP', 'Sentiment Analysis', 'Machine Learning'],
        github: {
            url: 'https://github.com/EmrhnAydn/emirhanAydinPortfolio',
            owner: 'EmrhnAydn',
            repo: 'emirhanAydinPortfolio',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'Turkish NLP Sentiment Analysis project in NLP Fundimentals couerse',
            tr: 'BTK Akademi Doğal Dil işlemeye giriş kursunda yaptığım giriş seviyesinde bir proje'
        }
    },


    {
        id: 'ThermalBridges',
        title: {
            en: 'Mask R-CNN with ResNet-101 FPN for Thermal Imaging',
            tr: 'Mask R-CNN tekniği ile ResNet-101 FPN kullanılarak Termal Görüntüleme'
        },
        description: {
            en: 'This project trains a Mask R-CNN model using the ResNet-101 FPN (Feature Pyramid Network) backbone for object detection and instance segmentation on a dataset of thermal images. The goal is to accurately detect and segment objects in thermal images, which are useful for various applications such as building inspections and anomaly detection.The project is implemented using Detectron2, a powerful library for object detection and segmentation developed by Facebook AI Research (FAIR).',
            tr: 'Bu proje, termal görüntülerden oluşan bir veri kümesi üzerinde nesne tespiti ve örnek düzeyinde segmentasyon için ResNet-101 FPN (Feature Pyramid Network) omurgasını kullanan bir Mask R-CNN modelini eğitir. Amaç, bina denetimleri ve anomali tespiti gibi çeşitli uygulamalarda faydalı olan termal görüntülerdeki nesneleri doğru bir şekilde tespit etmek ve segmentlere ayırmaktır.Proje, Facebook AI Research (FAIR) tarafından geliştirilen, nesne tespiti ve segmentasyon için güçlü bir kütüphane olan Detectron2 kullanılarak uygulanmıştır.'
        },
        tech: ['Machine Learning', 'Mask R-CNN', 'ResNet-101 FPN', 'Termal Görüntüleme'],
        github: {
            url: 'https://github.com/EmrhnAydn/thermalBridgeOnRoofTop',
            owner: 'EmrhnAydn',
            repo: 'thermalBridgeOnRoofTop',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'This project trains a Mask R-CNN model using the ResNet-101 FPN (Feature Pyramid Network) backbone for object detection and instance segmentation on a dataset of thermal images. The goal is to accurately detect and segment objects in thermal images, which are useful for various applications such as building inspections and anomaly detection.The project is implemented using Detectron2, a powerful library for object detection and segmentation developed by Facebook AI Research (FAIR).',
            tr: 'Bu proje, termal görüntülerden oluşan bir veri kümesi üzerinde nesne tespiti ve örnek düzeyinde segmentasyon için ResNet-101 FPN (Feature Pyramid Network) omurgasını kullanan bir Mask R-CNN modelini eğitir. Amaç, bina denetimleri ve anomali tespiti gibi çeşitli uygulamalarda faydalı olan termal görüntülerdeki nesneleri doğru bir şekilde tespit etmek ve segmentlere ayırmaktır.Proje, Facebook AI Research (FAIR) tarafından geliştirilen, nesne tespiti ve segmentasyon için güçlü bir kütüphane olan Detectron2 kullanılarak uygulanmıştır.'
        }
    },

    {
        id: 'assemblyI8086codes',
        title: {
            en: 'Assembly I8086 Codes',
            tr: 'Assembly I8086 Kodları'
        },
        description: {
            en: 'Assembly Intel 8086 code that I learned and wrote in the Microprocessor lecture.',
            tr: 'Mikroişlemci Dersinnde öğrendiğim ve yazdığım Assembly Intel 8086 Kodları'
        },
        tech: ['Assembly', 'Intel 8086'],
        github: {
            url: 'https://github.com/EmrhnAydn/assemblyI8086codes',
            owner: 'EmrhnAydn',
            repo: 'assemblyI8086codes',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'A modern, responsive portfolio website showcasing my projects and skills.',
            tr: 'Projelerimi ve yeteneklerimi sergileyen modern, responsive portfolyo sitesi.'
        }
    },


    {
        id: 'netSpeedTesting',
        title: {
            en: 'Internet Speed Testing',
            tr: 'İnternet Hız Testi Uygulaması'
        },
        description: {
            en: 'Internet Speed Testing',
            tr: 'İnternet Hız Testi Uygulaması'
        },
        tech: ['Python'],
        github: {
            url: 'https://github.com/EmrhnAydn/netSpeedTesting',
            owner: 'EmrhnAydn',
            repo: 'netSpeedTesting',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'Internet Speed Testing',
            tr: 'İnternet Hız Testi Uygulaması'
        }
    },



    {
        id: 'blockBreakGameArduino',
        title: {
            en: 'Arduino Brick Breaker Game',
            tr: 'Arduino Block Kırma Oyunu'
        },
        description: {
            en: 'This project is an implementation of a classic Brick Breaker game using an Arduino board, an OLED display, a TM1637 7-segment display, buttons, a potentiometer, and other components. The game involves controlling a paddle to bounce a ball and break bricks, with additional features like lives and power-ups.',
            tr: 'Bu proje, Arduino board, OLED display, TM1637 7-segment display, buttons, potentiometer ve diğer bileşenler kullanılarak bir klasik Brick Breaker oyununun uygulanmasıdır. Oyun, bir paddle ile topu atarak kırımları kırmak ve ekstra özellikler gibi can ve güçler gibi özelliklerle ilgili oyunu içerir.'
        },
        tech: ['Arduino', 'C++'],
        github: {
            url: 'https://github.com/EmrhnAydn/blockBreakGameArduino',
            owner: 'EmrhnAydn',
            repo: 'blockBreakGameArduino',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'This project is an implementation of a classic Brick Breaker game using an Arduino board, an OLED display, a TM1637 7-segment display, buttons, a potentiometer, and other components. The game involves controlling a paddle to bounce a ball and break bricks, with additional features like lives and power-ups.',
            tr: 'Bu proje, Arduino board, OLED display, TM1637 7-segment display, buttons, potentiometer ve diğer bileşenler kullanılarak bir klasik Brick Breaker oyununun uygulanmasıdır. Oyun, bir paddle ile topu atarak kırımları kırmak ve ekstra özellikler gibi can ve güçler gibi özelliklerle ilgili oyunu içerir.'
        }
    },



    {
        id: 'reserveAreaDetermination',
        title: {
            en: 'Reservoir Area and Cost Calculation Application with C',
            tr: 'C dilinde Rezerv Alanı ve Maliyet Hesaplama Uygulaması'
        },
        description: {
            en: 'This application calculates the area from a given coordinate list, performs certain operations within this area, and displays the resulting cost. It can typically be used in mining or similar fields. Using graph.h lib in C ',
            tr: 'Bu uygulama, verilen bir koordinat listesinden alanı hesaplar, bu alan içinde belirli işlemleri gerçekleştirir ve ortaya çıkan maliyeti görüntüler. Genellikle madencilik veya benzeri alanlarda kullanılabilir. C dilinde graph.h kütüphanesini kullanır.'
        },
        tech: ['C'],
        github: {
            url: 'https://github.com/EmrhnAydn/reserveAreaDetermination',
            owner: 'EmrhnAydn',
            repo: 'emirhanAydinPortfolio',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'This application calculates the area from a given coordinate list, performs certain operations within this area, and displays the resulting cost. It can typically be used in mining or similar fields. Using graph.h lib in C ',
            tr: 'Bu uygulama, verilen bir koordinat listesinden alanı hesaplar, bu alan içinde belirli işlemleri gerçekleştirir ve ortaya çıkan maliyeti görüntüler. Genellikle madencilik veya benzeri alanlarda kullanılabilir. C dilinde graph.h kütüphanesini kullanır.'
        }
    },


    {
        id: 'SocialMediaDataAnalysis',
        title: {
            en: 'Social Media User Graph Analysis',
            tr: 'Sosyal Medya Kullanıcı Graf Analizi'
        },
        description: {
            en: 'This Python script performs analysis on a social media user graph, exploring relationships, interests, and providing functionality for graph visualization.',
            tr: 'Bu Python betiği, sosyal medya kullanıcısı grafiğinde analiz yapar, ilişkileri, ilgileri ve grafik görselleştirme için işlevsellik sağlar.'
        },
        tech: ['Python', 'NetworkX', 'Matplotlib'],
        github: {
            url: 'https://github.com/EmrhnAydn/SocialMediaDataAnalysis',
            owner: 'EmrhnAydn',
            repo: 'emirhanAydinPortfolio',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'This Python script performs analysis on a social media user graph, exploring relationships, interests, and providing functionality for graph visualization.',
            tr: 'Bu Python betiği, sosyal medya kullanıcısı grafiğinde analiz yapar, ilişkileri, ilgileri ve grafik görselleştirme için işlevsellik sağlar.'
        }
    },


    {
        id: 'vehicleRentalProgram',
        title: {
            en: 'Vehicle Rental Program',
            tr: 'Araç Kiralama Programı'
        },
        description: {
            en: 'This program is a vehicle rental program that allows users to rent vehicles and manage their rentals.',
            tr: 'Bu program, araç kiralama programıdır ve kullanıcıların araçları kiralamalarını ve kiralamalarını yönetmelerini sağlar.'
        },
        tech: ['Python', 'OOP'],
        github: {
            url: 'https://github.com/EmrhnAydn/AVehicleRentalProgram',
            owner: 'EmrhnAydn',
            repo: 'emirhanAydinPortfolio',
            showReadme: true
        },
        images: [],
        liveUrl: null,
        visibility: 'public',
        longDescription: {
            en: 'A vehicle rental program built with Python and OOP.',
            tr: 'Python ve OOP ile oluşturulmuş araç kiralama programı.'
        }
    },



    {
        id: 'ugv-ground-controler',
        title: {
            en: 'UGV Ground Controler Desktop Application',
            tr: 'UGV yer bilgisayarı Masaüstü Uygulaması'
        },
        description: {
            en: 'The UGV ground station Desktop Application developed with Windows Forms receives and visualizes telemetry data. It also enables remote control.',
            tr: 'Windows Forms ile oluşturulmuş UGV yer bilgisayarı Masaüstü Uygulaması Telemetri verilerini alır ve görselleştirir. Ayrıca uzaktan kontrolü sağlar.'
        },
        tech: ['C#', 'Windows Forms'],
        github: null,
        images: [],
        liveUrl: null,
        visibility: 'private',
        longDescription: {
            en: 'The UGV ground station Desktop Application developed with Windows Forms receives and visualizes telemetry data. It also enables remote control.',
            tr: 'Windows Forms ile oluşturulmuş UGV yer bilgisayarı Masaüstü Uygulaması Telemetri verilerini alır ve görselleştirir. Ayrıca uzaktan kontrolü sağlar.'
        }
    },
];

// Dil desteği için yardımcı fonksiyon
export const getProjectText = (project, field, language) => {
    if (typeof project[field] === 'object' && project[field] !== null) {
        return project[field][language] || project[field]['en'];
    }
    return project[field];
};
