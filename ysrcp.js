const ycp_candidates = {
    "Srikakulam": "Dharmana Prasada Rao",
    "Amadalavalasa": "Thammineni Seetharam",
    "Pathapatnam": "Reddy Shanthi",
    "Narasannapeta": "Dharmana Krishna Das",
    "Tekkali": "Duvvada Srinivas",
    "Ichchapuram": "Piriya Vijaya",
    "Palasa": "Dr Seediri Appalaraju",
    "Rajam": "Dr Tale Rajesh",
    "Vizianagaram": "Kolagatla Veera Bhadra Swamy",
    "Bobbili": "Sambangi Venkatachina Appala Naidu",
    "Gajapathi Nagaram": "Botcha Appalanarasayya",
    "Chipurupalle": "Botcha Satyanarayana",
    "Nellimarla": "Baddukonda Appala Naidu",
    "Etcherla": "Gorle Kiran Kumar",
    "Gajuwaka": "Gudivada Amarnath",
    "Visakhapatnam South": "Vasupalli Ganesh",
    "Visakhapatnam North": "Kammila Kannaparaju (K.K. Raju)",
    "Bhimili": "Muttamsetti Srinivasarao (Avanthi Srinivas)",
    "Visakhapatnam East": "MVV Satyanarayana",
    "Visakhapatnam West": "Adari Anand",
    "Srungavarapukota": "Kadubandi Srinivasa Rao",
    "Pendurthi": "Annamreddy Adeep Raj",
    "Payakaraopet": "Kambala Jogulu",
    "Chodavaram": "Karanam Dharmasri",
    "Narsipatnam": "Petla Uma Sankara Ganesh",
    "Anakapalli": "Malasala Bharath Kumar",
    "Madugula": "Budi Mutyala Naidu",
    "Yelamanchili": "Uppalapati Venkata Ramanamurthy Raju (Kanna Babu Raju)",
    "Araku Valley (ST)": "Regam Matysa Lingam",
    "Paderu": "Matsyarasa Visweswara Raju",
    "Rampachodavaram": "Nagulapalli Dhanalakshmi",
    "Parvathipuram": "Alajangi Jogarao",
    "Kurupam": "Pamula Pushpasreevani",
    "Saluru": "Peedika Rajanna Dora",
    "Palakonda": "Viswasarayi Kalavathi",
    "Prathipadu": "Varupula Subbarao",
    "Jaggampeta": "Thota Narasimham",
    "Tuni": "Dadisetti Raja",
    "Pithapuram": "Vanga Geetha",
    "Kakinada City": "Dwarampudi Chandra Sekhara Reddy",
    "Kakinada Rural": "Kurasala Kannababu",
    "Peddapuram": "Davuluri Dorababu",
    "Razole": "Gollapalli Surya Rao",
    "Kothapeta": "Chirla Jaggireddy",
    "Mummidivaram": "Ponnada Venkata Satish Kumar",
    "Ramachandrapuram": "Pilli Suryaprakash",
    "Amalapuram": "Pinipe Viswarupu",
    "P Gannavaram": "Vipparthi Venugopal",
    "Mandapeta": "Thota Trimurthulu",
    "Anaparthi": "Dr Sathi Suryanarayana Reddy",
    "Gopalapuram": "Taneti Vanita",
    "Rajanagaram": "Jakkampudi Raja",
    "Nidadavole": "Geddam Srinivas Naidu",
    "Rajahmundry City": "Margani Bharath Ram",
    "Rajahmundry Rural": "Chelluboina Venu Gopala Krishna",
    "Kovvur": "Talari Venkatrao",
    "Narasapuram": "Mudunuri Naga Raja Vara Prasada Raju",
    "Bhimavaram": "Grandhi Srinivas",
    "Achanta": "Cherukuvada Sriranganadha Raju",
    "Tanuku": "Karumuri Venkata Nageswara Rao",
    "Undi": "P V L Narasimha Raju",
    "Tadepalligudem": "Kottu Satyanarayana",
    "Palakollu": "Gudala Srihari Gopala Rao",
    "Chintalapudi": "Kambham Vijaya Raju",
    "Nuzvid": "Meka Venkata Pratap Apparao",
    "Denduluru": "Kotaru Abbaya Chowdary",
    "Kaikalur": "Dulam Nageswara Rao (DNR)",
    "Polavaram": "Tellam Rajyalakshmi",
    "Eluru": "Alla Kali Krishna Srinivas (Alla Nani)",
    "Unguturu": "Puppala Srinivasarao (Vasubabu)",
    "Pamaru": "Kaile Anil Kumar",
    "Avanigadda": "Simhadri Ramesh Babu",
    "Machilipatnam": "Perni Vaka Sai Krishna Murthy (Kittu)",
    "Pedana": "Uppala Ramesh (Ramu)",
    "Gudivada": "Kodali Sri Venkateswara Rao (Nani)",
    "Gannavaram": "Dr Vallabhaneni Vamsi Mohan",
    "Penamaluru": "Jogi Ramesh",
    "Nandigama": "Dr Monditoka Jagan Mohana Rao",
    "Tiruvuru": "Nallagatla Swamy Das",
    "Vijayawada East": "Devineni Avinash",
    "Vijayawada West": "Shaik Asif",
    "Vijayawada Central": "Velampalli Srinivasa Rao",
    "Jaggayyapeta": "Samineneni Udayabhanu",
    "Mylavaram": "Sarnala Tirapathi Rao",
    "Tadikonda": "Mekathoti Sucharitha",
    "Prathipadu": "Balasani Kiran Kumar",
    "Tenali": "Annabathuni Siva Kumar",
    "Ponnuru": "Ambati Murali",
    "Guntur West": "Vidadala Rajini",
    "Mangalagiri": "Murugudu Lavanya",
    "Guntur East": "Shaik Noori Fatima",
    "Peddakurapadu": "Namburu Sankara Rao",
    "Vinukonda": "Bolla Brahma Naidu",
    "Sattenapalli": "Ambati Rambabu",
    "Gurazala": "Kasu Mahesh Reddy",
    "Chilakaluripet": "Kavati Siva Naga Manohar Naidu",
    "Narasaraopet": "Dr Gopireddy Srinivasa Reddy",
    "Macherla": "Pinnelli Ramakrishna Reddy",
    "Repalle": "Dr Evuru Ganesh",
    "Bapatla": "Kona Raghupathi",
    "Vemuru": "Varikuti Ashok Babu",
    "Santhanuthalapadu": "Merugu Nagarjuna",
    "Addanki": "Panem Chinna Hami Reddy",
    "Parchur": "Yadam Balaji",
    "Chirala": "Karanam Venkatesh",
    "Darsi": "Dr Buchepalli Sivaprasad Reddy",
    "Yerragondapalem": "Tatiparthi Chandra Sekhar",
    "Giddalur": "Kunduru Nagarjuna Reddy",
    "Ongole": "Balineni Srinivasa Reddy (Vasu)",
    "Kondapi": "Audimulapu Suresh",
    "Kanigiri": "Daddala Narayana Yadav",
    "Markapuram": "Anna Rambabu",
    "Kandukur": "Burra Madhusudhan Yadav",
    "Kavali": "Ramireddy Pratap Kumar Reddy",
    "Kovur": "Nallapareddy Prasanna Kumar Reddy",
    "Nellore City": "Md Khaleel Ahmed",
    "Nellore Rural": "Adala Prabhakara Reddy",
    "Udayagiri": "Mekapati Rajagopal Reddy",
    "Atmakur": "Mekapati Vikram Reddy",
    "Sarvepalli": "Kakani Govardhan Reddy",
    "Gudur": "Meriga Muralidhar",
    "Srikalahasti": "Biyyapu Madhusudhan Reddy",
    "Sullurpeta": "Kiliveti Sanjeevaiah",
    "Venkatagiri": "Nedurumalli Ram Kumar Reddy",
    "Tirupati": "Bhumana Abhinay Reddy",
    "Satyavedu": "Nukathoti Rajesh",
    "Kuppam": "Krishna Raghava Jayendra Bharath (KRJ Bharath)",
    "Palamaner": "Nallappagari Venkate Gowda",
    "Chandragiri": "Chevireddy Mohit Reddy",
    "G.D.Nellore": "Kalathur Krupalakshmi",
    "Nagari": "R.K. Roja",
    "Puthalapattu": "Mudirevula Sunil Kumar",
    "Chittoor": "Mittapalli Chandra Vijayanandha Reddy",
    "Madanapalle": "Nisar Ahmed",
    "Punganur": "Peddireddi Ramachandra Reddy",
    "Pileru": "Chinthala Ramachandra Reddy",
    "Thamballapalle": "Peddireddy Dwarakanatha Reddy",
    "Rajampet": "Akepati Amarnath Reddy",
    "Kodur (SC)": "Koramutla Sreenivasulu",
    "Rayachoti": "Gadikota Srikanth Reddy",
    "Jammalamadugu": "Dr Mule Sudheer Reddy",
    "Kadapa": "Amzath Basha Shaik Bepari",
    "Badvel": "Dr Dasari Sudha",
    "Pulivendula": "Y S Jagan Mohan Reddy",
    "Kamalapuram": "Pochimareddy Ravindranath Reddy",
    "Mydkur": "Raghurami Reddy Settipally",
    "Proddatur": "Rachamalla Siva Prasad Reddy",
    "Kodumur": "Dr Audimulapu Sathish",
    "Adoni": "Yellareddygari Sai Prasad Reddy",
    "Kurnool": "A.Md Imtiaz",
    "Mantralayam": "Yellareddygari Balanagi Reddy",
    "Yemmiganur": "Butta Renuka",
    "Pattikonda": "Kangati Sreedevi",
    "Alur": "Busine Virupakshi",
    "Nandikotkur": "Dr Dara Sudheer",
    "Banaganapalle": "Katasani Rami Reddy",
    "Allagadda": "Gangula Brijendra Reddy (Nani)",
    "Nandyal": "Singareddy Ravi Chandra Kishore Reddy (Silpa Ravi)",
    "Panyam": "Katasani Rambhupal Reddy",
    "Dhone": "Bugga Rajendranath Reddy",
    "Srisailam": "Singareddy Chakrapani Reddy (Silpa Chakrapani Reddy)",
    "Puttaparthi": "Duddunkunta Sreedhar Reddy",
    "Hindupur": "Tippe Gowda Narayan Deepika",
    "Dharmavaram": "Kethireddy Venkatarami Reddy",
    "Penukonda": "K.V Ushashri Charan",
    "Madakasira": "Eera Lakkappa",
    "Raptadu": "Thopudurthi Prakash Reddy",
    "Kadiri": "BS Maqbool Ahmed",
    "Singanamala": "Mannepakula Veeranjaneyulu",
    "Tadpatri": "Kethireddy Pedda Reddy",
    "Anantapur Urban": "Anantha Venkatarami Reddy",
    "Guntakal": "Yellareddygari Venkatarami Reddy",
    "Uravakonda": "Yellareddygari Visweswara Reddy",
    "Kalyandurg": "Talari Rangaiah",
    "Rayadurg": "Mettu Govinda Reddy"
};
