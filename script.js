// ========================================
// INTERNATIONALIZATION (i18n) SYSTEM
// ========================================
const translations = {
    tr: {
        nav_projects: 'Projeler',
        nav_about: 'Hakkımda',
        nav_contact: 'İletişim',
        hero_title: 'Mekanik tasarım ve üretim teknolojilerine odaklanan makine mühendisi',
        hero_description: 'CAD/CAM, termodinamik ve malzeme bilimi alanlarında güçlü bir teknik altyapıya sahip, yenilikçi mühendislik çözümleri üretmeye tutkulu yeni mezun makine mühendisi.',
        hero_education: 'Makine Mühendisliği Lisans Mezunu — Mekanik Tasarım, Üretim Teknolojileri ve Termodinamik uzmanlık alanları.',
        hero_resume: 'Özgeçmiş',
        projects_title: 'Projelerime göz atın!',
        about_bio: 'Makine Mühendisliği lisans eğitimimi başarıyla tamamlamış, mekanik tasarım, üretim teknolojileri ve termodinamik alanlarında uzmanlaşmış bir mühendisim. Üniversite dönemimde SolidWorks, AutoCAD ve ANSYS gibi endüstriyel yazılımlarla çeşitli projeler geliştirdim. Kariyer hedefim, yenilikçi mühendislik çözümleri üreterek endüstriye katkı sağlamak ve sürekli öğrenme anlayışıyla profesyonel gelişimimi sürdürmektir.',
        skills_title: 'Teknik Yetkinlikler',
        skill_manufacturing: 'Üretim',
        skill_manufacturing_desc: 'CNC, Torna, Freze, 3D Baskı, Kaynak',
        skill_simulation: 'Simülasyon',
        skill_simulation_desc: 'ANSYS, MATLAB, FEA Analiz',
        skill_thermo: 'Termodinamik',
        skill_thermo_desc: 'Isı Transferi, Akışkanlar Mekaniği',
        experience_title: 'Deneyim',
        exp1_role: 'Ar-Ge Stajyeri (Teknik Ofis)',
        exp1_company: 'Ekin Endüstriyel',
        exp2_role: 'Üretim Stajyeri',
        exp2_company: 'ATA Arms',
        exp3_role: 'Hat Bakım ve Ağır Bakım Stajyeri',
        exp3_company: 'Metro İstanbul',
        education_title: 'Eğitim',
        edu1_degree: 'Makine Mühendisliği Bölümü',
        edu1_school: 'Marmara Üniversitesi',
        edu2_degree: 'Makine Metal Teknolojileri',
        edu2_school: 'Karadeniz Teknik Üniversitesi',
        hobbies_title: 'Hobiler & İlgi Alanları',
        hobby_cycling: 'Maraton Bisiklet',
        hobby_tt: 'Masa Tenisi',
        hobby_swim: 'Yüzme',
        hobby_camp: 'Kamp',
        
        // Project Details Shared
        back_to_projects: 'Tüm Projelere Dön',
        detail_about_title: 'Proje Hakkında',
        detail_tools_title: 'Kullanılan Teknolojiler',
        cat_design: 'Mekanik Tasarım',
        cat_robotics: 'Robotik',
        cat_manufacturing: 'Üretim',
        cat_thermo: 'Termodinamik',
        cat_software: 'Yazılım Geliştirme',
        detail_report_link: 'Rapor Bağlantısı',
        
        // Projects
        project1_title: 'İnsansız Hava Aracı Tasarımı ve Analizleri',
        project1_desc: `Bu projenin temel odak noktası, otonom görevleri en verimli şekilde yerine getirebilecek bir İnsansız Hava Aracı (İHA) tasarımı ve aerodinamik analizlerinin yapılmasıdır.<br><br><b>Konsept Tasarım ve Aerodinamik</b><br>Tasarım konfigürasyonunda martı kanat yapısı, hücum kenarı geriye açılı kanat tasarımı ve uçlarda winglet kullanılarak hava sürüklemesi minimize edilmiştir. Kuyruk olarak geleneksel yapı yerine daha hafif ve düşük direnç oluşturan V-Tail (V-Kuyruk) seçilmiştir. Kanatlarda NACA 4412 profili ile düşük hızlarda yüksek kaldırma kuvveti hedeflenmiş, kuyrukta ise simetrik NACA 0012 kullanılmıştır.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/img_p3_1.png" alt="AYBARS Perspektif" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/img_p3_3.png" alt="V-Tail Analizi" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Hesaplamalı Akışkanlar Dinamiği (HAD) Analizleri</b><br>ANSYS kullanılarak HAD analizleri ile dış yüzeydeki basınç dağılımı, hız kontürleri ve akış çizgileri doğrulanmıştır. 16 m/s seyir hızında 32.8 N kaldırma kuvveti elde edilirken, sürükleme kuvveti yalnızca 2.0 N ölçülmüştür. İHA'nın yüksek hızlarda da görev profilini sorunsuz karşıladığı ve yüksek Cl/Cd (kaldırma/sürükleme) verimliliği sağladığı tespit edilmiştir.<br><br><img src="images/img_p13_1.png" alt="HAD Analizleri" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project2_title: 'Vidalı Yandan Hareketli Çekme Çenesi Tasarımı ve İmalatı',
        project2_desc: `Bu projede, standart kama tipi (wedge) çenelerin yumuşak/esnek malzemelerde yaşadığı kayma sorunlarını gidermek amacıyla düşük maliyetli ve güvenilir "Vidalı Yandan Hareketli Çekme Çenesi" tasarlanmış ve üretilmiştir.<br><br><b>Tasarım ve Üretim Özellikleri</b><br>Dalgalı (Wave) ve Tırtıklı (Knurled) olmak üzere iki farklı çene yüzey opsiyonuyla SolidWorks üzerinde modellenen tasarım, yüksek deformasyon direnci için AISI 304 Paslanmaz Çelik malzemeden CNC freze ve torna işlemleriyle üretilmiştir. 2-10 mm çene açıklığı kapasitesine ve 1.7 kg ağırlığa sahip tutucunun, kılavuz pimleri için ISO toleranslarında hassas geçme işlemleri uygulanmıştır.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj2/image18.png" alt="Tutucu CAD Tasarımı" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj2/image20.png" alt="Üretim Aşaması" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Yapısal Analiz ve Çekme Testleri</b><br>Kılavuz pimler üzerindeki eğilme ve kesme kuvvetleri analitik olarak hesaplanmış, ardından ANSYS Mechanical 2022 kullanılarak doğrulanmıştır. 3.2 kN eksenel yükleme altındaki Sonlu Elemanlar Analizlerinde (FEA), maksimun Von Mises gerilmesi güvenli bölgede (88.5 MPa) bulunmuştur. Prototip, Shimadzu AGS-X 50 kN cihazında Dikey ve Yatay 3D PLA numuneler ile başarıyla test edilmiş ve standart Wedge tipi çenelerle performansı kıyaslanmıştır.<br><br><img src="images/proj2/image31.png" alt="ANSYS FEA Analizi" style="width:100%; border-radius:8px; margin-top:10px;"><br><br><img src="images/proj2/image1.png" alt="Proje Görseli" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project3_title: 'Otonom Afet Lojistiği İHA Tasarımı ve Analizleri',
        project3_desc: `Bu projede, afet anında kara ulaşımının kesildiği senaryolar için koordineli çalışan "Aybars" (sabit kanat) ve "Kayra" (döner kanat) insansız hava araçlarının yapısal tasarım ve aerodinamik analizleri gerçekleştirilmiştir.<br><br><b>Aybars (Sabit Kanat) Tasarımı ve Aerodinamiği</b><br>7 kg kalkış ağırlığına ve 13 m/s seyir hızına sahip Aybars'ın kabuğu PETG, iç iskeleti PLA ile üretilmiş ve cam elyaf ile güçlendirilmiştir. 3374 mm kanat açıklığına sahip araçta düşük Reynolds sayılarında yüksek taşıma/sürükleme verimliliği sunan SG6043 kanat profili seçilmiştir. Kuyruk tasarımında ağırlık tasarrufu ve düşük hava direnci sağlayan NACA 0012 profilli V-Tail (V-Kuyruk) kullanılmıştır. Uçuş kararlılığı için kanatlarda 3 derecelik dihedral açısı ve yukarı eğimli winglet tasarımı uygulanarak uç girdapları minimize edilmiştir.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj3/img_p8_1.png" alt="Aybars Teknik Resim" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj3/img_p5_1.png" alt="Aerodinamik Grafikler" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Yapısal ve HAD Analizleri</b><br>XFLR5 üzerinden stabilite analizi yapılan İHA'nın, boyuna ve yanal düzlemde dinamik olarak kararlı bir uçuş sergileyeceği doğrulanmıştır. Hesaplamalı Akışkanlar Dinamiği (HAD) analizleri sonucunda sürüklenme kuvveti 8.9 N, kaldırma kuvveti ise 85.8 N olarak bulunmuştur. Yapısal analizlerde ise kanat-gövde bağlantısındaki karbon fiber çubuklara binen maksimum gerilmenin 3.35 MPa olduğu tespit edilmiş ve sistemin yapısal kararlılığı ispatlanmıştır.<br><br><img src="images/proj3/img_p7_1.png" alt="HAD Hız Kontürleri ve Yapısal Analiz" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project4_title: '2 Boyutlu CFD (Sürekli Isı İletimi) Programı',
        project4_desc: `Bu projede, 2 boyutlu sürekli rejim ısı iletimi problemlerini (2D Steady Heat Conduction) simüle etmek amacıyla MATLAB kullanılarak bir Hesaplamalı Akışkanlar Dinamiği (CFD) programı tasarlanıp kodlanmıştır.<br><br><b>Sayısal Çözüm Yöntemi ve Analiz Altyapısı</b><br>Isı transferi denklemlerinin çözümü için Sonlu Hacimler Yöntemi (Finite Volume Method) kullanılmıştır. İki boyutlu uzaysal alanların verimli bir şekilde hesaplanabilmesi için Değişimli Yönlü Örtük (ADI - Alternating Direction Implicit) metodu programa entegre edilmiştir. Nümerik hesaplamalar sırasında ortaya çıkan matris sistemlerinin hızlı çözülebilmesi amacıyla Üç Köşegenli Matris Algoritması (TDMA - Tridiagonal Matrix Algorithm) kullanılarak satır-sütun yönlü ardışık iterasyonlar gerçekleştirilmiştir.<br><br><b>Kullanıcı Arayüzü ve Uygulama Kapsamı</b><br>Program; Alüminyum, Titanyum ve Cam Elyaf gibi 14 farklı malzemenin termal özelliklerini barındırmakta olup; sabit sıcaklık, sabit ısı akısı, taşınım (convection) ve yalıtımlı sınır (isolated) koşullarının simülasyonunu desteklemektedir. Hassasiyetin artırılması için iterasyonlar sıcaklık farkı hata payı 10^-3 altına düşene kadar devam etmekte ve sonuçlar sıcaklık dağılım haritası (pcolor) olarak görselleştirilmektedir.<br><br><img src="images/proj4/img_p0_1.png" alt="CFD Program Arayüzü" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project5_title: 'KPSS Mobil Asistan Uygulaması',
        project5_desc: 'KPSS sınavına hazırlanan öğrenciler için geliştirilmiş, çalışma verimliliğini artırmayı hedefleyen kapsamlı bir mobil asistan uygulamasıdır.<br><br><b>Odaklanma ve Zaman Yönetimi</b><br>Kullanıcıların çalışma sürelerini verimli yönetebilmesi için arka planda çalışabilen (Foreground Service) gelişmiş bir Pomodoro sayacı entegre edilmiştir. Özelleştirilebilir çalışma ve mola süreleri, bildirim ve titreşim uyarılarıyla desteklenmiştir. Ana ekranda sürekli değişen motivasyon sözleri ile odaklanma sürekli kılınmıştır.<br><br><b>Sınav İstatistikleri ve Net Takibi</b><br>Kullanıcıların deneme sonuçları Vico Charts kütüphanesi ile interaktif Net Gelişim grafiklerine dönüştürülmüştür. KPSS puan türlerinde anlık ve tahmini puan hesaplamaları gibi gelişmiş analitik modüller eklenmiştir.<br><br><b>Soru Havuzu ve Gelişmiş Altyapı</b><br>CameraX API ile kullanıcının çözemediği soruları fotoğraflayarak arşivlemesi sağlanmıştır. Verilerin lokalde güvenli saklanması için Room Database kullanılmış olup, arayüzde Jetpack Compose ve bağımlılık enjeksiyonu için Hilt gibi modern Android teknolojileri tercih edilmiştir.<br><br><img src="images/asistan.jpeg" alt="Mobil Asistan" style="width:100%; border-radius:8px; margin-top:10px; object-fit:contain; max-height:450px; padding:20px; box-sizing:border-box;">',
        
        project6_title: 'Açık Kaynak Kodlu Çözücü ile FEA',
        project6_desc: 'Bu projede, açık kaynaklı PFE (Kısmi Diferansiyel Denklem) çözücüsü olan FEniCS platformu kullanılarak sürekli rejim ısı transferi ve basınç-hız tabanlı jet akışı simülasyonları gerçekleştirilmiştir.<br><br><b>Sürekli Rejim Termal Analizi (Steady-State Thermal Analysis)</b><br>Bir alüminyum kanatçık (fin) üzerindeki sıcaklık dağılımı 2 boyutlu olarak incelenmiştir. Probleme özgü termal sınır koşulları tanımlanmış ve çözüm elde edilmiştir. Düğüm sayısı artırılarak ağ bağımsızlığı (mesh independence) analizi yapılmış, analitik fin denklemiyle nümerik veriler karşılaştırılarak sonuçların doğruluğu kanıtlanmıştır.<br><br><img src="images/proj6/img-003.png" alt="Sürekli Rejim Termal Analiz" style="width:100%; border-radius:8px; margin-bottom:15px; object-fit:contain; max-height:400px; background:#111;"><br><b>Laminer Jet Akışı (Jet Flow Application)</b><br>Reynolds sayısı 100 olan laminer jet akışı senaryosu Navier-Stokes denklemlerini ayrıklaştırarak modellenmiştir. GMSH kullanılarak hesaplama ağı oluşturulduktan sonra, python üzerindeki FEniCS kütüphanesiyle basınç-hız denklemleri eşzamanlı olarak çözülmüş ve zaman adımlarına bağlı (transient) hız ile basınç kontürleri çıkarılmıştır.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj6/img-008.png" alt="Termal Analiz Şeması" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj6/img-018.png" alt="Jet Akış Hız Kontürleri" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span>'
    },
    en: {
        nav_projects: 'Projects',
        nav_about: 'About',
        nav_contact: 'Contact',
        hero_title: 'Mechanical engineer focusing on design and manufacturing technologies',
        hero_description: 'A newly graduated mechanical engineer with a strong technical background in CAD/CAM, thermodynamics and materials science, passionate about creating innovative engineering solutions.',
        hero_education: 'Bachelor of Science in Mechanical Engineering — Specializing in Mechanical Design, Manufacturing Technologies and Thermodynamics.',
        hero_resume: 'Resume',
        projects_title: 'Check out my projects!',
        about_bio: 'I am a mechanical engineer who has successfully completed my undergraduate education, specializing in mechanical design, manufacturing technologies and thermodynamics. During my university years, I developed various projects using industrial software such as SolidWorks, AutoCAD and ANSYS. My career goal is to contribute to the industry by producing innovative engineering solutions and to continue my professional development with a commitment to lifelong learning.',
        skills_title: 'Technical Skills',
        skill_manufacturing: 'Manufacturing',
        skill_manufacturing_desc: 'CNC, Lathe, Milling, 3D Printing, Welding',
        skill_simulation: 'Simulation',
        skill_simulation_desc: 'ANSYS, MATLAB, FEA Analysis',
        skill_thermo: 'Thermodynamics',
        skill_thermo_desc: 'Heat Transfer, Fluid Mechanics',
        experience_title: 'Experience',
        exp1_role: 'R&D Intern (Technical Office)',
        exp1_company: 'Ekin Endüstriyel',
        exp2_role: 'Manufacturing Intern',
        exp2_company: 'ATA Arms',
        exp3_role: 'Line & Heavy Maintenance Intern',
        exp3_company: 'Metro Istanbul',
        education_title: 'Education',
        edu1_degree: 'Mechanical Engineering',
        edu1_school: 'Marmara University',
        edu2_degree: 'Mechanical Metal Technologies',
        edu2_school: 'Karadeniz Technical University',
        hobbies_title: 'Hobbies & Interests',
        hobby_cycling: 'Marathon Cycling',
        hobby_tt: 'Table Tennis',
        hobby_swim: 'Swimming',
        hobby_camp: 'Camping',
        
        // Project Details Shared
        back_to_projects: 'Back to Projects',
        detail_about_title: 'About the Project',
        detail_tools_title: 'Technologies Used',
        cat_design: 'Mechanical Design',
        cat_robotics: 'Robotics',
        cat_manufacturing: 'Manufacturing',
        cat_thermo: 'Thermodynamics',
        cat_software: 'Software Development',
        detail_report_link: 'View Report',
        
        // Projects
        project1_title: 'Unmanned Aerial Vehicle Design and Analysis',
        project1_desc: `The main focus of this project is the design and aerodynamic analysis of an Unmanned Aerial Vehicle (UAV) optimized for autonomous missions.<br><br><b>Concept Design & Aerodynamics</b><br>To minimize drag, a seagull wing structure with a swept-back leading edge and winglets was utilized. A V-Tail configuration was chosen to reduce weight and air resistance. The NACA 4412 airfoil was selected for the wings to ensure high lift at lower speeds, while a symmetrical NACA 0012 was used for tail stability.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/img_p3_1.png" alt="UAV Perspective" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/img_p3_3.png" alt="Airfoil Analysis" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Computational Fluid Dynamics (CFD) Analysis</b><br>Using ANSYS, aerodynamic performance was validated by examining pressure distributions, velocity contours, and streamlines. At a cruising speed of 16 m/s, the UAV generates 32.8 N of lift with only 2.0 N of drag. Simulation results indicate a highly efficient Lift/Drag (Cl/Cd) ratio, confirming structural stability even at higher velocities.<br><br><img src="images/img_p13_1.png" alt="CFD Charts" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project2_title: 'Design and Manufacturing of Screw Side Action Tensile Grip',
        project2_desc: `This project focuses on resolving the slippage issues of standard wedge grips on soft/flexible materials through the design and manufacture of a cost-effective and highly reliable "Screw Side Action Grip".<br><br><b>Design & Manufacturing Features</b><br>Modeled in SolidWorks with Wave and Knurled jaw surface options, the grip was manufactured from AISI 304 Stainless Steel using high-precision CNC milling and lathe turning to ensure maximum deformation resistance. Weighing only 1.7 kg and featuring a 2-10 mm jaw opening capacity, precision ISO tolerance fits were maintained specifically for the guide pins.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj2/image18.png" alt="Grip CAD Model" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj2/image20.png" alt="Manufacturing" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Structural Analysis & Tensile Testing</b><br>Bending and shear forces on the guide pins were analytically calculated and subsequently confirmed via FEA in ANSYS Mechanical 2022. Under simulated 3.2 kN axial loads, the maximum von Mises stress on the pins peaked securely at 88.5 MPa. The prototype underwent real-world tensile testing on a Shimadzu AGS-X 50 kN machine using Vertical and Horizontal 3D-printed PLA specimens to validate slip performance against traditional wedge grips.<br><br><img src="images/proj2/image31.png" alt="ANSYS FEA Analysis" style="width:100%; border-radius:8px; margin-top:10px;"><br><br><img src="images/proj2/image1.png" alt="Project Image" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project3_title: 'Autonomous Disaster Logistics UAV Design and Analysis',
        project3_desc: `This project involves the structural design and aerodynamic analysis of two coordinated Unmanned Aerial Vehicles (UAVs)—"Aybars" (fixed-wing) and "Kayra" (rotary-wing)—developed for disaster logistics scenarios.<br><br><b>Aybars (Fixed-Wing) Design & Aerodynamics</b><br>Weighing 7 kg with a 13 m/s cruise speed, Aybars features a PETG shell, PLA internal frame, and glass-fiber reinforcement. With a 3374 mm wingspan, the SG6043 airfoil was selected for its high lift-to-drag efficiency at low Reynolds numbers. A NACA 0012 V-Tail configuration was chosen to reduce weight and drag. A 3-degree dihedral angle and upward-curved winglets were implemented to ensure stability and minimize tip vortices.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj3/img_p8_1.png" alt="Technical Drawing" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj3/img_p5_1.png" alt="Aerodynamic Charts" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Structural & CFD Analysis</b><br>Stability analyses conducted in XFLR5 validated the UAV's longitudinal and lateral dynamic stability. Computational Fluid Dynamics (CFD) results indicated a drag force of 8.9 N and a lift force of 85.8 N. Structural analysis confirmed stability, with maximum stress on the carbon fiber wing-fuselage connection rods measuring just 3.35 MPa.<br><br><img src="images/proj3/img_p7_1.png" alt="CFD Velocity Contours" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project4_title: '2D CFD (Steady Heat Conduction) Program',
        project4_desc: `In this project, a Computational Fluid Dynamics (CFD) program was designed and coded using MATLAB to simulate 2D steady-state heat conduction problems.<br><br><b>Numerical Solution Method & Analysis Infrastructure</b><br>The Finite Volume Method (FVM) was employed to discretize and solve the heat transfer equations. To efficiently compute two-dimensional spatial domains computationally, the Alternating Direction Implicit (ADI) method was integrated. A Tridiagonal Matrix Algorithm (TDMA) was utilized to rapidly solve the resulting discretized matrix systems through row-and-column successive iterations.<br><br><b>User Interface & Application Scope</b><br>The program includes thermal properties for 14 different materials (such as Aluminum, Titanium, and Glass Fiber) and applies boundary conditions including constant temperature, constant heat flux, convection, and insulated boundaries. To ensure accuracy, the program iterates until the maximum temperature difference error falls below 10^-3, subsequently visualizing the output as a precise temperature distribution map.<br><br><img src="images/proj4/img_p0_1.png" alt="CFD Program Interface" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project5_title: 'KPSS Mobile Assistant Application',
        project5_desc: 'A comprehensive mobile assistant application designed to increase the study efficiency of students preparing for the KPSS (Public Personnel Selection Examination).<br><br><b>Focus and Time Management</b><br>An advanced Pomodoro timer running as a foreground service is integrated to help users manage their study time effectively. Customizable study/break intervals and notification/vibration alerts support user motivation. Additionally, constantly rotating motivational quotes on the main screen keep users focused.<br><br><b>Exam Statistics and Performance Tracking</b><br>Daily mock exam results are visualized through interactive graphs using the Vico Charts library. Instant and estimated score calculations for various exam types allow users to track their progress closely.<br><br><b>Question Pool and Deep Infrastructure</b><br>Utilizing the CameraX API, a system was developed for users to take photos of questions they couldn\'t solve and archive them within the app. Data is stored securely on the device using Room Database, while a modern Jetpack Compose UI and Hilt dependency injection architecture guarantee a stable user experience.<br><br><img src="images/asistan.jpeg" alt="Mobile Assistant" style="width:100%; border-radius:8px; margin-top:10px; object-fit:contain; max-height:450px; padding:20px; box-sizing:border-box;">',
        
        project6_title: 'Open Source PDE Solver & FEA',
        project6_desc: 'In this project, steady-state heat conduction and pressure-velocity based jet flow simulations were performed using the open-source PDE solver platform, FEniCS.<br><br><b>Steady-State Thermal Analysis</b><br>The temperature distribution on an aluminum fin was investigated in 2D. Thermal boundary conditions were defined and solved using the finite element method. A mesh independence analysis was conducted by increasing the node count, and the numerical data was validated by comparing it with the analytical fin equation.<br><br><img src="images/proj6/img-003.png" alt="Steady-State Thermal Analysis" style="width:100%; border-radius:8px; margin-bottom:15px; object-fit:contain; max-height:400px; background:#111;"><br><b>Laminar Jet Flow Application</b><br>A laminar jet flow scenario with a Reynolds number of 100 was modeled by discretizing the Navier-Stokes equations. After generating the computational grid using GMSH, pressure-velocity equations were solved concurrently via the FEniCS library in Python, extracting transient velocity and pressure contours.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj6/img-008.png" alt="Thermal Analysis" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj6/img-018.png" alt="Jet Flow Velocity" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span>'
    },
    de: {
        nav_projects: 'Projekte',
        nav_about: 'Über mich',
        nav_contact: 'Kontakt',
        hero_title: 'Maschinenbauingenieur mit Schwerpunkt auf Konstruktion und Fertigungstechnologien',
        hero_description: 'Ein frisch graduierter Maschinenbauingenieur mit einem starken technischen Hintergrund in CAD/CAM, Thermodynamik und Werkstoffwissenschaft, leidenschaftlich für innovative Ingenieurlösungen.',
        hero_education: 'Bachelor of Science in Maschinenbau — Spezialisierung auf Mechanische Konstruktion, Fertigungstechnologien und Thermodynamik.',
        hero_resume: 'Lebenslauf',
        projects_title: 'Entdecken Sie meine Projekte!',
        about_bio: 'Ich bin ein Maschinenbauingenieur, der sein Studium erfolgreich abgeschlossen hat und sich auf mechanische Konstruktion, Fertigungstechnologien und Thermodynamik spezialisiert hat. Während meines Studiums habe ich verschiedene Projekte mit Industriesoftware wie SolidWorks, AutoCAD und ANSYS entwickelt. Mein Karriereziel ist es, durch innovative Ingenieurlösungen zur Industrie beizutragen und meine berufliche Entwicklung mit einem Engagement für lebenslanges Lernen fortzusetzen.',
        skills_title: 'Technische Kompetenzen',
        skill_manufacturing: 'Fertigung',
        skill_manufacturing_desc: 'CNC, Drehen, Fräsen, 3D-Druck, Schweißen',
        skill_simulation: 'Simulation',
        skill_simulation_desc: 'ANSYS, MATLAB, FEA-Analyse',
        skill_thermo: 'Thermodynamik',
        skill_thermo_desc: 'Wärmeübertragung, Strömungsmechanik',
        experience_title: 'Berufserfahrung',
        exp1_role: 'F&E Praktikant (Technisches Büro)',
        exp1_company: 'Ekin Endüstriyel',
        exp2_role: 'Produktionspraktikant',
        exp2_company: 'ATA Arms',
        exp3_role: 'Strecken- und Schwerinstandhaltungspraktikant',
        exp3_company: 'Metro Istanbul',
        education_title: 'Ausbildung',
        edu1_degree: 'Maschinenbau',
        edu1_school: 'Marmara Universität',
        edu2_degree: 'Mechanische Metalltechnologien',
        edu2_school: 'Karadeniz Technische Universität',
        hobbies_title: 'Hobbys & Interessen',
        hobby_cycling: 'Marathon-Radfahren',
        hobby_tt: 'Tischtennis',
        hobby_swim: 'Schwimmen',
        hobby_camp: 'Camping',
        
        // Project Details Shared
        back_to_projects: 'Zurück zu Projekten',
        detail_about_title: 'Über das Projekt',
        detail_tools_title: 'Verwendete Technologien',
        cat_design: 'Mechanisches Design',
        cat_robotics: 'Robotik',
        cat_manufacturing: 'Fertigung',
        cat_thermo: 'Thermodynamik',
        cat_software: 'Softwareentwicklung',
        
        // Projects
        project1_title: 'Entwurf und Analyse unbemannter Luftfahrzeuge',
        project1_desc: `Der Hauptfokus dieses Projekts liegt auf dem Design und der aerodynamischen Analyse eines unbemannten Luftfahrzeugs (UAV) für autonome Missionen.<br><br><b>Konzeptdesign & Aerodynamik</b><br>Um den Luftwiderstand zu minimieren, wurde eine Möwenflügelstruktur mit gepfeilter Vorderkante und Winglets eingesetzt. Ein V-Leitwerk wurde gewählt, um Gewicht und Luftwiderstand zu reduzieren. Für die Flügel wurde das NACA 4412 Profil verwendet, um bei niedrigeren Geschwindigkeiten hohen Auftrieb zu gewährleisten, während das Profil NACA 0012 für die Heckstabilität verbaut wurde.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/img_p3_1.png" alt="UAV Ansicht" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/img_p3_3.png" alt="Analyse" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>CFD-Analysen</b><br>Mit ANSYS wurde die aerodynamische Leistung durch Untersuchung von Druckverteilungen und Stromlinien validiert. Bei einer Reisegeschwindigkeit von 16 m/s erzeugt das UAV 32,8 N Auftrieb bei nur 2,0 N Luftwiderstand. Die Simulationsergebnisse bestätigen ein äußerst effizientes Auftriebs-Widerstands-Verhältnis (Cl/Cd), was Stabilität auch bei hohen Fluggeschwindigkeiten garantiert.<br><br><img src="images/img_p13_1.png" alt="CFD Charts" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project2_title: 'Design und Fertigung eines Schraubspannzeugs',
        project2_desc: `Dieses Projekt konzentriert sich auf die Lösung von Rutschproblemen herkömmlicher Keilspannzeuge bei weichen/flexiblen Materialien und umfasst das Design und die Herstellung eines kostengünstigen "Schraubspannzeugs (Screw Side Action Grip)".<br><br><b>Konstruktions- & Fertigungsmerkmale</b><br>Das Design wurde in SolidWorks mit Wellen- und Rändelbackenoberflächen modelliert und zur maximalen Verformungsbeständigkeit aus Edelstahl AISI 304 mittels hochpräzisem CNC-Fräsen und Drehen gefertigt. Neben einem Gewicht von nur 1,7 kg und einer Backenöffnungen von 2 bis 10 mm wurden präzise ISO-Toleranzen für die Führungstragbolzen sichergestellt.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj2/image18.png" alt="CAD-Modell" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj2/image20.png" alt="Fertigungsprozess" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Strukturanalyse & Zugversuche</b><br>Biege- und Scherkräfte an den Führungsstiften wurden analytisch berechnet und mittels FEA in ANSYS Mechanical 2022 bestätigt. Unter einer simulierten axialen Belastung von 3,2 kN lag die maximale von Mises-Spannung sicher im Bereich von 88,5 MPa. Der Prototyp wurde durch reale Zugversuche an vertikalen und horizontalen 3D-gedruckten PLA-Proben mittels Shimadzu AGS-X (50 kN) Maschinen validiert und mit klassischen Keilspannzeugen verglichen.<br><br><img src="images/proj2/image31.png" alt="ANSYS FEA-Analyse" style="width:100%; border-radius:8px; margin-top:10px;"><br><br><img src="images/proj2/image1.png" alt="Projektbild" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project3_title: 'Design und Analyse von autonomen Katastrophenlogistik-UAVs',
        project3_desc: `Dieses Projekt umfasst das strukturelle Design und die aerodynamische Analyse von zwei koordinierten unbemannten Luftfahrzeugen (UAVs) – "Aybars" (Starrflügler) und "Kayra" (Drehflügler) – für Katastrophenlogistik-Szenarien.<br><br><b>Aybars (Starrflügler) Design & Aerodynamik</b><br>Aybars wiegt 7 kg bei einer Reisegeschwindigkeit von 13 m/s und verfügt über eine PETG-Schale, einen PLA-Innenrahmen und eine Glasfaserverstärkung. Bei einer Spannweite von 3374 mm wurde das Profil SG6043 aufgrund seiner hohen Auftriebs-/Widerstandseffizienz ausgewählt. Ein V-Leitwerk (NACA 0012) reduziert Gewicht und Widerstand. Ein V-Form-Winkel von 3 Grad und nach oben gebogene Winglets minimieren Wirbel und sorgen für Stabilität.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj3/img_p8_1.png" alt="Technische Zeichnung" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj3/img_p5_1.png" alt="Diagramme" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span><b>Struktur- & CFD-Analysen</b><br>Stabilitätsanalysen in XFLR5 bestätigten die dynamische Längs- und Querstabilität des UAVs. CFD-Ergebnisse zeigten eine Widerstandskraft von 8,9 N und eine Auftriebskraft von 85,8 N. Strukturanalysen bestätigten die Belastbarkeit, wobei die maximale Spannung an den Kohlefaserverbindungen nur 3,35 MPa betrug.<br><br><img src="images/proj3/img_p7_1.png" alt="CFD-Analysen" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project4_title: '2D-CFD-Programm (Stationäre Wärmeleitung)',
        project4_desc: `In diesem Projekt wurde ein Programm für die numerische Strömungsmechanik (CFD) mit MATLAB entwickelt, um Probleme der zweidimensionalen stationären Wärmeleitung zu simulieren.<br><br><b>Numerische Lösungsmethoden & Analyseinfrastruktur</b><br>Zur Lösung der Wärmeübertragungsgleichungen kam die Finite-Volumen-Methode (FVM) zum Einsatz. Um die zweidimensionalen räumlichen Bereiche rechnerisch effizient zu lösen, wurde die Alternating Direction Implicit (ADI)-Methode integriert. Die daraus resultierenden diskretisierten Matrixsysteme wurden mithilfe eines Tridiagonalen-Matrix-Algorithmus (TDMA) durch zeilen- und spaltenweise aufeinanderfolgende Iterationen gelöst.<br><br><b>Benutzeroberfläche & Anwendungsbereich</b><br>Das Programm berücksichtigt thermische Eigenschaften von 14 verschiedenen Materialien (wie Aluminium, Titan und Glasfaser) und berechnet physikalische Randbedingungen wie konstante Temperatur, konstanten Wärmestrom, Konvektion und isolierte Grenzen. Zur Gewährleistung der Genauigkeit iteriert das Programm, bis der Temperaturschwankungsfehler unter 10^-3 fällt, und visualisiert das Ergebnis anschließend als Temperaturverteilungskarte.<br><br><img src="images/proj4/img_p0_1.png" alt="CFD Interface" style="width:100%; border-radius:8px; margin-top:10px;">`,
        
        project5_title: 'KPSS Mobile Assistenten-App',
        project5_desc: 'Eine umfassende mobile Assistenten-Anwendung, die entwickelt wurde, um die Lerneffizienz von Studenten zu verbessern, die sich auf die KPSS (Auswahlprüfung für öffentliches Personal) vorbereiten.<br><br><b>Fokus und Zeitmanagement</b><br>Ein fortschrittlicher Pomodoro-Timer in Verbindung mit einem Vordergrunddienst (Foreground Service) wurde integriert, um die Lernzeit effizient zu verwalten. Einstellbare Lern-/Pausenzeiten und Benachrichtigungen helfen bei der Erhaltung der Motivation. Laufend wechselnde Zitate auf dem Startbildschirm fördern zusätzlich die Konzentration.<br><br><b>Prüfungsstatistiken und Verfolgung</b><br>Probeprüfungsergebnisse werden durch interaktive Diagramme mittels der Vico Charts-Bibliothek veranschaulicht. Echtzeit- und voraussichtliche Punkteberechnungen für verschiedene Testarten erlauben eine detaillierte Überwachung des Fortschritts.<br><br><b>Aufgabenpool und Moderne Infrastruktur</b><br>Dank der CameraX-API können ungelöste Fragen abfotografiert und im lokalen Archiv gesichert werden. Für die Datenspeicherung kommt Room Database zum Einsatz, während die Nutzeroberfläche auf Jetpack Compose und der Hilt Dependency Injection basiert.<br><br><img src="images/asistan.jpeg" alt="Mobile Assistent" style="width:100%; border-radius:8px; margin-top:10px; object-fit:contain; max-height:450px; padding:20px; box-sizing:border-box;">',
        
        project6_title: 'Open Source PDE-Löser & FEA',
        project6_desc: 'In diesem Projekt wurden stationäre Wärmeleitung und druck-/geschwindigkeitsbasierte Strahlströmungssimulationen (Jet Flow) mit der Open-Source-PDE-Löser-Plattform FEniCS durchgeführt.<br><br><b>Stationäre Thermische Analyse</b><br>Die Temperaturverteilung auf einer Aluminiumrippe (Fin) wurde in 2D untersucht. Thermische Randbedingungen wurden definiert und gelöst. Eine Netzunabhängigkeitsanalyse wurde durchgeführt und die numerischen Daten wurden durch Vergleich mit der analytischen Gleichung validiert.<br><br><img src="images/proj6/img-003.png" alt="Stationäre Thermische Analyse" style="width:100%; border-radius:8px; margin-bottom:15px; object-fit:contain; max-height:400px; background:#111;"><br><b>Laminare Strahlströmungsanwendung</b><br>Ein laminares Strahlströmungsszenario (Re = 100) wurde durch Diskretisierung der Navier-Stokes-Gleichungen modelliert. Das Rechengitter wurde mit GMSH generiert und die instationären Geschwindigkeits- und Druckkonturen über FEniCS extrahiert.<br><br><span style="display:flex; gap:10px; margin: 10px 0;"><img src="images/proj6/img-008.png" alt="Thermische Analyse" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"><img src="images/proj6/img-018.png" alt="Strahlströmung" style="width:48%; border-radius:8px; object-fit:contain; background:#111;"></span>'
    }
};

const projectsData = {
    'project-1': {
        titleKey: 'project1_title',
        descKey: 'project1_desc',
        categoryKey: 'cat_design',
        image: 'images/aybars-iskelet.png',
        year: '2025',
        reportUrl: '#',
        tools: ['SolidWorks', 'ANSYS CFX', 'XFLR5', 'Aero Design']
    },
    'project-2': {
        titleKey: 'project2_title',
        descKey: 'project2_desc',
        categoryKey: 'cat_manufacturing',
        image: 'images/proj2/image18.png',
        year: '2025',
        reportUrl: '#',
        tools: ['SolidWorks', 'ANSYS Mechanical', 'CNC Machining', 'Tensile Testing']
    },
    'project-3': {
        titleKey: 'project3_title',
        descKey: 'project3_desc',
        categoryKey: 'cat_design',
        image: 'images/proj3/img_p7_1.png',
        year: '2025',
        reportUrl: '#',
        tools: ['SolidWorks', 'ANSYS', 'XFLR5', '3D Printing']
    },
    'project-4': {
        titleKey: 'project4_title',
        descKey: 'project4_desc',
        categoryKey: 'cat_thermo',
        image: 'images/proj4/img_p0_1.png',
        year: '2023',
        reportUrl: '#',
        tools: ['MATLAB', 'Finite Volume Method', 'ADI Method', 'TDMA Algorithm']
    },
    'project-5': {
        titleKey: 'project5_title',
        descKey: 'project5_desc',
        categoryKey: 'cat_software',
        image: 'images/asistan.jpeg',
        year: '2024',
        reportUrl: '#',
        tools: ['Kotlin', 'Jetpack Compose', 'Room / Hilt', 'CameraX', 'Vico Charts']
    },
    'project-6': {
        titleKey: 'project6_title',
        descKey: 'project6_desc',
        categoryKey: 'cat_software',
        image: 'images/proj6/img-018.png',
        year: '2023',
        reportUrl: '#',
        tools: ['FEniCS', 'Python', 'GMSH', 'Navier-Stokes', 'Thermal Analysis']
    }
};

const langMeta = {
    tr: { label: 'Türkçe', htmlLang: 'tr' },
    en: { label: 'English', htmlLang: 'en' },
    de: { label: 'Deutsch', htmlLang: 'de' }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'tr';
let currentProject = null; // Track current open project for i18n triggers

function setLanguage(lang, animate = true) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update html lang attribute
    document.documentElement.lang = langMeta[lang].htmlLang;

    // Update lang button label
    document.getElementById('lang-label').textContent = langMeta[lang].label;

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Handle project detail dynamic re-rendering if a project is open
    if (currentProject) {
        document.getElementById('detail-desc').innerHTML = `<p>${translations[lang][projectsData[currentProject].descKey]}</p>`;
    }

    // Get all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');

    if (animate) {
        // Fade out
        elements.forEach(el => el.classList.add('lang-fading'));
        const descEl = document.getElementById('detail-desc');
        if(descEl) descEl.classList.add('lang-fading');

        setTimeout(() => {
            // Update text
            elements.forEach(el => {
                const key = el.dataset.i18n;
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });

            // Fade in
            elements.forEach(el => el.classList.remove('lang-fading'));
            if(descEl) descEl.classList.remove('lang-fading');
        }, 250);
    } else {
        // No animation (initial load)
        elements.forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Close dropdown
    document.getElementById('lang-switcher').classList.remove('open');
}

// ========================================
// DOM READY
// ========================================
document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // LANGUAGE SWITCHER SETUP
    // ========================================
    const langSwitcher = document.getElementById('lang-switcher');
    const langBtn = document.getElementById('lang-btn');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            setLanguage(lang, true);
        });
    });

    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            langSwitcher.classList.remove('open');
        }
    });

    // Apply saved language on load
    setLanguage(currentLang, false);

    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================
    const revealTargets = [
        '.section-title',
        '.project-card',
        '.about-photo-wrapper',
        '.about-name',
        '.about-bio',
        '.skills-section',
        '.experience-section',
        '.skill-card',
        '.experience-item'
    ];

    revealTargets.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal');
        });
    });

    document.querySelectorAll('.projects-grid, .skills-grid').forEach(grid => {
        grid.classList.add('reveal-stagger');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // ========================================
    // SPA NAVIGATION LOGIC
    // ========================================
    const navLinks = document.querySelectorAll('.nav-link[data-section], .footer-link');
    const pageHero = document.getElementById('hero');
    const pageProjects = document.getElementById('projects');
    const pageAbout = document.getElementById('about');
    const pageProjectDetail = document.getElementById('project-detail');

    function switchPage(targetId) {
        // Reset reveal animations for a fresh entrance
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => revealObserver.observe(el), 50);
        });

        // Hide all pages first
        if (pageHero) pageHero.classList.add('page-hidden');
        if (pageProjects) pageProjects.classList.add('page-hidden');
        if (pageAbout) pageAbout.classList.add('page-hidden');
        if (pageProjectDetail) pageProjectDetail.classList.add('page-hidden');

        // Toggle desired page
        if (targetId === 'about') {
            if (pageAbout) pageAbout.classList.remove('page-hidden');
            currentProject = null;
        } else if (targetId === 'project-detail') {
            if (pageProjectDetail) pageProjectDetail.classList.remove('page-hidden');
        } else {
            // Default to projects view
            if (pageHero) pageHero.classList.remove('page-hidden');
            if (pageProjects) pageProjects.classList.remove('page-hidden');
            targetId = 'projects';
            currentProject = null;
        }

        // Update active nav link (only for main sections, not detail)
        if (targetId !== 'project-detail') {
            document.querySelectorAll('.nav-link[data-section]').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === targetId) {
                    link.classList.add('active');
                }
            });
        }

        // Instant scroll to top when changing pages
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                switchPage(targetId);
            }
        });
    });

    // ========================================
    // PROJECT DETAIL LOGIC
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');
    const backBtn = document.getElementById('back-to-projects');
    
    // Elements to populate
    const detTitle = document.getElementById('detail-title');
    const detCategory = document.getElementById('detail-category');
    const detYear = document.getElementById('detail-year');
    const detImage = document.getElementById('detail-image');
    const detDesc = document.getElementById('detail-desc');
    const detTools = document.getElementById('detail-tools');
    const detReportLink = document.getElementById('detail-report-link');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = card.id;
            const data = projectsData[projectId];
            
            if (data) {
                currentProject = projectId;
                
                // Populate translation keys
                detTitle.dataset.i18n = data.titleKey;
                detCategory.dataset.i18n = data.categoryKey;
                
                // Populate strings
                detYear.textContent = data.year;
                detImage.src = data.image;
                detImage.alt = translations[currentLang][data.titleKey];
                
                // Set specific styling for mobile assistant portrait/scale
                if (projectId === 'project-5') {
                    detImage.style.objectFit = 'contain';
                    detImage.style.padding = '30px';
                    detImage.style.background = 'var(--color-bg)';
                } else {
                    detImage.style.objectFit = 'cover';
                    detImage.style.padding = '0';
                    detImage.style.background = 'transparent';
                }
                
                // Populate dynamic desc and tools
                detDesc.innerHTML = `<p>${translations[currentLang][data.descKey]}</p>`;
                detTools.innerHTML = data.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
                if (detReportLink) {
                    detReportLink.href = data.reportUrl || '#';
                }
                
                // Trigger translation update for the new keys
                setLanguage(currentLang, false);
                
                // Switch view
                switchPage('project-detail');
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            switchPage('projects');
        });
    }

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50) {
            navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = '';
        }
    }, { passive: true });

    // ========================================
    // PARALLAX SUBTLE EFFECT FOR HERO
    // ========================================
    const heroTitle = document.querySelector('.hero-title');
    const profilePhoto = document.querySelector('.profile-photo');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;

        if (scrollY < maxScroll) {
            const progress = scrollY / maxScroll;
            const titleTranslate = scrollY * 0.15;
            const photoTranslate = scrollY * 0.08;
            const opacity = 1 - progress * 0.6;

            if (heroTitle) {
                heroTitle.style.transform = `translateY(${titleTranslate}px)`;
                heroTitle.style.opacity = opacity;
            }
            if (profilePhoto) {
                profilePhoto.style.transform = `translateY(${photoTranslate}px) scale(${1 - progress * 0.05})`;
            }
        }
    }, { passive: true });

    // ========================================
    // PROJECT CARD TILT EFFECT (desktop only)
    // ========================================
    if (window.matchMedia('(min-width: 769px)').matches) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `translateY(-4px) perspective(800px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

});
