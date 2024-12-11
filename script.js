let d=document.querySelector("#district");
let c=document.querySelector("#constituency");


districts.forEach((val)=>{
    let opt=document.createElement("option");
    opt.innerText=val;
    opt.setAttribute("name",`${val}-mla`);
    d.append(opt);
})

d.addEventListener('change', function() {
    let selectedDistrict = this.value;
    let pres_cons=document.querySelectorAll("#constituency option");
    pres_cons.forEach((val)=>{
        c.remove(val);
    })
    let opt=document.createElement("option");
    opt.innerText="-- Select your constituency --";
    opt.style.selected;
    opt.style.disabled="true";
    c.append(opt);

    obj[selectedDistrict].forEach((val)=>{
        let opt=document.createElement("option");
        opt.innerText=val;
        c.append(opt);
    }); 
});
c.addEventListener('change',function(){
    let selectedConstituency = this.value;

    //YCP 

    let update_ycp = document.querySelector(".ycp-name").innerText = ycp_candidates[selectedConstituency] || "No Candidate";
    let y = document.querySelector("#ycp");
    let ycpVoteButton = document.getElementById("vote-ycp");
   
    // Check if YCP candidate exists
    if (!ycp_candidates[selectedConstituency]) {
        ycpVoteButton.disabled = true;
        ycpVoteButton.title = "No YCP candidate available for this constituency";
        y.setAttribute("src","https://www.telugu360.com/wp-content/uploads/2024/01/YSRCP-1-1-1200x800.jpg");

    } else {
        ycpVoteButton.disabled = false;
        ycpVoteButton.title = "";  
        url = searchImages(`${update_ycp}-${ycp_candidates[selectedConstituency]}-mla-candidate-ycp`);
        console.log(url);

        url.then((val)=>{
            y.setAttribute("src",val);   
    })
    }

    //tdp
    let update_tdp = document.querySelector(".tdp-name").innerText = tdp_candidates[selectedConstituency] || "No Candidate";
    let t = document.querySelector("#tdp");
    let tdpVoteButton = document.getElementById("vote-tdp");
    console.log(update_tdp);
    console.log(selectedConstituency);
    console.log(tdp_candidates[selectedConstituency]);

    // Check if TDP candidate exists
    if (!tdp_candidates[selectedConstituency]) {
        tdpVoteButton.disabled = true;
        tdpVoteButton.title = "No TDP candidate available for this constituency";
        t.setAttribute("src","https://cdn.siasat.com/wp-content/uploads/2020/05/TDP.jpg");

    } else {
        tdpVoteButton.disabled = false;
        tdpVoteButton.title = "";  
        url = searchImages(`${update_tdp}-${tdp_candidates[selectedConstituency]}-mla-candidate-tdp`);
        console.log(url);

        url.then((val)=>{
            t.setAttribute("src",val);   
    })
    }

    //jsp

    let update_jsp = document.querySelector(".janasena-name").innerText = jsp_candidates[selectedConstituency] || "No Candidate";
    console.log(update_jsp);
    
    let j = document.querySelector("#jsp");
    let jspVoteButton = document.getElementById("vote-jsp");
    

    // Check if JSP candidate exists
    if (!jsp_candidates[selectedConstituency]) {
        jspVoteButton.disabled = true;
        jspVoteButton.title = "No JSP candidate available for this constituency";
        j.setAttribute("src","https://yt3.googleusercontent.com/ytc/AIdro_nRTDejRXO5imf6-QlVgPnlc-E_-qrJspkOEbuZNw=s900-c-k-c0x00ffffff-no-rj");

    } else {
        jspVoteButton.disabled = false;
        jspVoteButton.title = "";  
        url = searchImages(`${update_jsp}-${jsp_candidates[selectedConstituency]}-mla-candidate-janasena-${selectedConstituency}`);
        console.log(url);

        url.then((val)=>{
            j.setAttribute("src",val);   
    })
    }

 
})

// To fetch the url
        async function searchImages(name) {
            const apiKey = 'AIzaSyA65IV1WJfT2fY3CBTOjnXUvMPz4aDVCa4';
            const cx = 'f5d63eb0c962c4eb2';
            const endpoint = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(name)}&cx=${cx}&searchType=image&key=${apiKey}`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    const imageUrl = data.items[0].link;
                    // Return the URL of the first image result
                    return imageUrl;
                }
                else{
                    console.log("no images found");
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        }    

        //Know to which party they voted
let ycp_vote=document.getElementById("vote-ycp");
ycp_vote.addEventListener('click',(e)=>{
    window.location.href="success.html"
})

let tdp_vote=document.getElementById("vote-tdp");
tdp_vote.addEventListener('click',(e)=>{
    window.location.href="success.html"
})

let jsp_vote=document.getElementById("vote-jsp");
jsp_vote.addEventListener('click',(e)=>{
    window.location.href="success.html"
})
