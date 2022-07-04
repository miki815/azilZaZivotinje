
listaOglasa=[
    {
        imezivotinje: '_',
        opis: '_',
        telefon: '_',
        id: '0',
        korisnik: '_'
    }
    
]


listaKomentara=[
    {
        kom: "Lorem",
        id: "0"
    }
]


function dodaj(){
    let jezik='s'
    if(localStorage.getItem("listaOglasa")==null){
        localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
    }
    listaOglasa=JSON.parse(localStorage.getItem("listaOglasa", listaOglasa))
   
    let ime=document.getElementById("ZivotinjaDodajO").value
    let opis1=document.getElementById("OpisDodajO").value
    let telefon1=document.getElementById("KontaktDodajO").value
    let flag=0;
    if(ime=='' || opis1=='' || telefon1==''){
        if(jezik=='e'){
            document.getElementById("porukaDodajO").innerHTML="Input all data!"
        }else{
            document.getElementById("porukaDodajO").innerHTML="Unesite sve podatke!"
        }
       
        return
    }
   

    let len=listaOglasa.length
    let id=listaOglasa[len-1]
    id=id.id
    id=parseInt(id)+1
    korisnik=localStorage.getItem("ulogovani")
    listaOglasa.push({
        imezivotinje: ime,
        opis: opis1,
        telefon: telefon1,
        id: id,
        korisnik: korisnik

    })
    

    localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
    if(jezik=='e'){
        alert("Successfully!")
    }else{
        alert("Uspesno ste dodali oglas!")
    }
   
}
function dodajE(){
    let jezik='e'
    if(localStorage.getItem("listaOglasa")==null){
        localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
    }
    listaOglasa=JSON.parse(localStorage.getItem("listaOglasa", listaOglasa))
   
    let ime=document.getElementById("ZivotinjaDodajO").value
    let opis1=document.getElementById("OpisDodajO").value
    let telefon1=document.getElementById("KontaktDodajO").value
    let flag=0;
    if(ime=='' || opis1=='' || telefon1==''){
        if(jezik=='e'){
            document.getElementById("porukaDodajO").innerHTML="Input all data!"
        }else{
            document.getElementById("porukaDodajO").innerHTML="Unesite sve podatke!"
        }
       
        return
    }
   

    let len=listaOglasa.length
    let id=listaOglasa[len-1]
    id=id.id
    id=parseInt(id)+1
    korisnik=localStorage.getItem("ulogovani")
    listaOglasa.push({
        imezivotinje: ime,
        opis: opis1,
        telefon: telefon1,
        id: id,
        korisnik: korisnik

    })
    

    localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
    if(jezik=='e'){
        alert("Successfully!")
    }else{
        alert("Uspesno ste dodali oglas!")
    }
   
}

function izgubljeni(){
    if(localStorage.getItem("ulogovani")=="" || localStorage.getItem("ulogovani")==null){
        window.location.href='greska.html'
        return;
    }
    if(localStorage.getItem("listaOglasa")==null){
        localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
    }
    if(localStorage.getItem("listaKomentara")==null){
        localStorage.setItem("listaKomentara", JSON.stringify(listaKomentara))
    }
    listaOglasa=JSON.parse(localStorage.getItem("listaOglasa", listaOglasa))
    if(listaOglasa.length==1){
        //window.location.href="poruka.html"
    }
    let ukupnoizgubljenih=listaOglasa.length
    for(let i=1; i< ukupnoizgubljenih; i++){
        let a=$("<td></td>").addClass("ime").append(listaOglasa[i].id+". "+listaOglasa[i].imezivotinje)
        let b=$("<td></td>").addClass("op").addClass('tekstOglas').append(listaOglasa[i].opis)
        let c=$("<td></td>").addClass("tel").append("Kontakt: "+listaOglasa[i].telefon)
        let x=$("<table></table>").append(

            
            $("<tr></tr>").append(a)


        ).append(
           
            $("<tr></tr>").append(b)

        ).append(
            
            $("<tr></tr>").append(c)

        ).addClass("info")

        a=$("<td></td>").append("<textarea class='opis2'  name='opis2' rows='4' cols='50'>").append("<input type=submit value='Dodaj komentar' class='dodajKomentar' ></input>").
        
        addClass('kom').append("<input type=submit value='Preuzmi' class='preuzmi'></input>")
        d=$("<tr></tr>").append(a)
        

        a=$("<td></td>").addClass("komentarinaslov").text("Komentari")
        b=$("<tr></tr>").append(a)
        c=$("<table></table>").append(d).append(b).addClass("tabelaKomentara").append("<hr>")
        listaKomentara=JSON.parse(localStorage.getItem("listaKomentara"))

        for(let l=1; l<listaKomentara.length; l++){
            if(listaKomentara[l].id==listaOglasa[i].id){
                a=$("<td></td>").addClass('tekstOglas').append(listaKomentara[l].kom)
                d=$("<tr></tr>").append(a)
                d.addClass('kom')
                $(c).append(d)
                $(c).append("<hr>")
            }
        }

        
        d=$("<div></div>").addClass("email_box").addClass('cen').addClass('oglasi')
        inpt=$("<div></div>").addClass("input_main")
        cnt=$("<div></div>").addClass("container")
        cnt.append(x).append(c)
        inpt.append(cnt)
        d.append(inpt)
        
        $("#izgubljeniljubimci").append(d)
        
       
        
    }

}

function izgubljeniE(){
    if(localStorage.getItem("ulogovani")=="" || localStorage.getItem("ulogovani")==null){
        window.location.href='greska.html'
        return;
    }
    if(localStorage.getItem("listaOglasa")==null){
        localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
    }
    if(localStorage.getItem("listaKomentara")==null){
        localStorage.setItem("listaKomentara", JSON.stringify(listaKomentara))
    }
    listaOglasa=JSON.parse(localStorage.getItem("listaOglasa", listaOglasa))
    if(listaOglasa.length==1){
        //window.location.href="poruka.html"
    }
    let ukupnoizgubljenih=listaOglasa.length
    for(let i=1; i< ukupnoizgubljenih; i++){
        let a=$("<td></td>").addClass("ime").append(listaOglasa[i].id+". "+listaOglasa[i].imezivotinje)
        let b=$("<td></td>").addClass("op").append(listaOglasa[i].opis)
        let c=$("<td></td>").addClass("tel").append("Contact: "+listaOglasa[i].telefon)
        let x=$("<table></table>").append(

            
            $("<tr></tr>").append(a)


        ).append(
           
            $("<tr></tr>").append(b)

        ).append(
            
            $("<tr></tr>").append(c)

        ).addClass("info")

        a=$("<td></td>").append("<textarea class='opis2'  name='opis2' rows='4' cols='50'>").append("<input type=submit value='Add comment' class='dodajKomentar' ></input>").
        
        addClass('kom').append("<input type=submit value='Download' class='preuzmi'></input>")
        d=$("<tr></tr>").append(a)
        

        a=$("<td></td>").addClass("komentarinaslov").text("Comments")
        b=$("<tr></tr>").append(a)
        c=$("<table></table>").append(d).append(b).addClass("tabelaKomentara").append("<hr>")
        listaKomentara=JSON.parse(localStorage.getItem("listaKomentara"))

        for(let l=1; l<listaKomentara.length; l++){
            if(listaKomentara[l].id==listaOglasa[i].id){
                a=$("<td></td>").append(listaKomentara[l].kom)
                d=$("<tr></tr>").append(a)
                d.addClass('kom')
                $(c).append(d)
                $(c).append("<hr>")
            }
        }

        
        d=$("<div></div>").addClass("email_box").addClass('cen')
        inpt=$("<div></div>").addClass("input_main")
        cnt=$("<div></div>").addClass("container")
        cnt.append(x).append(c)
        inpt.append(cnt)
        d.append(inpt)

        $("#izgubljeniljubimci").append(d)
        
       
        
    }

}

$(document).ready(function(){
    breadcrumbs();

    var psi, macke, ptice;
    if(localStorage.getItem('psi') == null){
        psi = [{'ime': 'aska', 'godine': 3}, {'ime': 'lesi', 'godine': 2.5}, {'ime': 'plavko', 'godine': 2}];
        macke = [{'ime': 'lela', 'godine': 4}, {'ime': 'mika', 'godine': 3.5}, {'ime': 'bela', 'godine': 5}];
        ptice = [{'ime': 'pera', 'godine': 6}, {'ime': 'zucko', 'godine': 5}, {'ime': 'paunovic', 'godine': 9}];
        localStorage.setItem('psi', JSON.stringify(psi));
        localStorage.setItem('macke', JSON.stringify(macke));
        localStorage.setItem('ptice', JSON.stringify(ptice));
    }
    else{
        psi = JSON.parse(localStorage.getItem('psi'));
    }
    $("#sortiranje").on('click', sortiraj);
    $("#pretraga").on('click', pretraga);
    $('body').on('click', '.dodajKomentar',function(){
        t=$(this).parent().parent().parent().parent()
        t=t.find('table.info')
        t=t.find('td.ime')
        t=t.text()
        id=t[0]
        textkom= $(this).parent()
        textkom=textkom.find('textarea.opis2')
        textkom=textkom.val()
        if(textkom!=''){
            korisnik=localStorage.getItem("ulogovani")
            textkom=korisnik+": "+textkom
            a=$("<td></td>").append(""+textkom)
            d=$("<tr></tr>").append(a)
            d.addClass('kom')
            c=$(this).parent()
            c=$(c).parent()
            c=$(c).parent()
            $(c).append(d)
            $(c).append("<hr>")
            listaKomentara=JSON.parse(localStorage.getItem("listaKomentara"))
            listaKomentara.push({

                kom: textkom,
                id: id
            })
            localStorage.setItem("listaKomentara", JSON.stringify(listaKomentara))
        }
        
    })

    $('body').on('click', '.preuzmi',function(){
        t=$(this).parent().parent().parent().parent()
        t=t.find('table.info')
        t=t.find('td.ime')
        ime=t.text()

        t=$(this).parent().parent().parent().parent()
        t=t.find('table.info')
        t=t.find('td.op')
        opis=t.text()

        t=$(this).parent().parent().parent().parent()
        t=t.find('table.info')
        t=t.find('td.tel')
        telefon=t.text()
        
        
        var doc=new jsPDF()
        doc.text(10, 10, ime+"\n"+opis+"\n"+telefon)
        doc.save('oglas'+ime[0]+'.pdf')

        
    })

    $('body').on('click', '.obrisiOglas',function(){

        listaOglasa=JSON.parse(localStorage.getItem("listaOglasa"))
        listaKomentara=JSON.parse(localStorage.getItem("listaKomentara"))
        t=$(this).parent().parent().parent().parent()
        t=t.find('table.info')
        t=t.find('td.ime')
        id=t.text()
        id=id.charAt(0)
        id=parseInt(id)
        
        for(let i=0; i<listaOglasa.length; i++){
            if(listaOglasa[i].id==id){
                listaOglasa.splice(i,1)
            }
        }

        j=0
        for(let i=0; i<listaKomentara.length; i++){
            if(parseInt(listaKomentara[j].id)==id){
                listaKomentara.splice(j,1)
                j--
            }
            j++
        }

        localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
        localStorage.setItem("listaKomentara", JSON.stringify(listaKomentara))
        document.location.reload()
        
    })

    myMap();

})






nizKorisnika=[

    {
        ime: "_",
        lozinka: "_", 
        telefon: "_",
        email: "_"
    }

]




function registracija(){


    
    if(localStorage.getItem("nizKorisnika")==null){
        nizKorisnika=[

            {
                ime: "_",
                lozinka: "_", 
                telefon: "_",
                email: "_"
            }
        
        ]

        localStorage.setItem("nizKorisnika", JSON.stringify(nizKorisnika))
    }
    nizKorisnika=JSON.parse(localStorage.getItem("nizKorisnika"))
    let ime=document.getElementById("Ime").value
    let telefon=document.getElementById("Telefon").value
    let email=document.getElementById("Email").value
    let lozinka1=document.getElementById("Lozinka1").value
    let lozinka=document.getElementById("Lozinka").value
    let ispravno=1
    let jezik='s'
    if(ime==''){

     
        if(jezik=='e'){
            document.getElementById('porukaIme').innerHTML="Type name!"
        }else{
            document.getElementById('porukaIme').innerHTML="Unesite ime!"
        }
       
        ispravno=0
    }
    if(telefon==''){
        if(jezik=='e'){
            document.getElementById('porukaTelefon').innerHTML="Type telephone!"
        }else{
            document.getElementById('porukaTelefon').innerHTML="Unesite telefon!"
        }
        ispravno=0
    }
    if(email==''){
        if(jezik=='e'){
            document.getElementById('porukaEmail').innerHTML="Type email!"
        }else{
            document.getElementById('porukaEmail').innerHTML="Unesite email!"
        }
        ispravno=0
    }
    if(lozinka1==''){
        if(jezik=='e'){
            document.getElementById('porukaLozinka').innerHTML="Type password!"
        }else{
            document.getElementById('porukaLozinka').innerHTML="Unesite password!"
        }
        
        ispravno=0
    }
    if(lozinka==''){
        if(jezik=='e'){
            document.getElementById('porukaLozinka1').innerHTML="Type password!"
        }else{
            document.getElementById('porukaLozinka1').innerHTML="Unesite password!"
        }
        ispravno=0
    }
    if(ispravno ){


       if(lozinka==lozinka1){
        let dodaj=0
        for(let i=0; i<nizKorisnika.length; i++){
            if(nizKorisnika[i].ime==ime){
                dodaj=1
            }
            if(nizKorisnika[i].email==email){
                dodaj=1
            }
            if(nizKorisnika[i].telefon==telefon){
                dodaj=1
            }
        }

       if(dodaj){
            if(jezik=='e'){
                alert("User exits!")
            }else{
                alert("Korisnik sa datim parametrima već postoji! Pokušajte ponovo!")
            }
           
       }else{
        nizKorisnika.push({

            ime: ime,
            lozinka: lozinka,
            telefon: telefon, 
            email: email
           })
    
           localStorage.setItem("nizKorisnika", JSON.stringify(nizKorisnika))
            if(jezik=='e'){
                alert("Successfully!")
            }
            else{
                alert("Uspešno ste kreirali nalog!")
            }
          

       }
       }
       else{
           alert("Passwords are not same!")
       }
      

    }



}
function registracijaE(){


    
    if(localStorage.getItem("nizKorisnika")==null){
        nizKorisnika=[

            {
                ime: "_",
                lozinka: "_", 
                telefon: "_",
                email: "_"
            }
        
        ]

        localStorage.setItem("nizKorisnika", JSON.stringify(nizKorisnika))
    }
    nizKorisnika=JSON.parse(localStorage.getItem("nizKorisnika"))
    let ime=document.getElementById("Ime").value
    let telefon=document.getElementById("Telefon").value
    let email=document.getElementById("Email").value
    let lozinka1=document.getElementById("Lozinka1").value
    let lozinka=document.getElementById("Lozinka").value
    let ispravno=1
    let jezik='e'
    if(ime==''){

     
        if(jezik=='e'){
            document.getElementById('porukaIme').innerHTML="Type name!"
        }else{
            document.getElementById('porukaIme').innerHTML="Unesite ime!"
        }
       
        ispravno=0
    }
    if(telefon==''){
        if(jezik=='e'){
            document.getElementById('porukaTelefon').innerHTML="Type telephone!"
        }else{
            document.getElementById('porukaTelefon').innerHTML="Unesite telefon!"
        }
        ispravno=0
    }
    if(email==''){
        if(jezik=='e'){
            document.getElementById('porukaEmail').innerHTML="Type email!"
        }else{
            document.getElementById('porukaEmail').innerHTML="Unesite email!"
        }
        ispravno=0
    }
    if(lozinka1==''){
        if(jezik=='e'){
            document.getElementById('porukaLozinka').innerHTML="Type password!"
        }else{
            document.getElementById('porukaLozinka').innerHTML="Unesite password!"
        }
        
        ispravno=0
    }
    if(lozinka==''){
        if(jezik=='e'){
            document.getElementById('porukaLozinka1').innerHTML="Type password!"
        }else{
            document.getElementById('porukaLozinka1').innerHTML="Unesite password!"
        }
        ispravno=0
    }
    if(ispravno ){


       if(lozinka==lozinka1){
        let dodaj=0
        for(let i=0; i<nizKorisnika.length; i++){
            if(nizKorisnika[i].ime==ime){
                dodaj=1
            }
            if(nizKorisnika[i].email==email){
                dodaj=1
            }
            if(nizKorisnika[i].telefon==telefon){
                dodaj=1
            }
        }

       if(dodaj){
            if(jezik=='e'){
                alert("User exits!")
            }else{
                alert("Korisnik sa datim parametrima već postoji! Pokušajte ponovo!")
            }
           
       }else{
        nizKorisnika.push({

            ime: ime,
            lozinka: lozinka,
            telefon: telefon, 
            email: email
           })
    
           localStorage.setItem("nizKorisnika", JSON.stringify(nizKorisnika))
            if(jezik=='e'){
                alert("Successfully!")
            }
            else{
                alert("Uspešno ste kreirali nalog!")
            }
          

       }
       }
       else{
           alert("Passwords are not same!")
       }
      

    }



}


function prijava(){
    let jezik='s'
    if(localStorage.getItem("nizKorisnika")==null){
        nizKorisnika=[

            {
                ime: "_",
                lozinka: "_", 
                telefon: "_",
                email: "_"
            }
        
        ]

        localStorage.setItem("nizKorisnika", JSON.stringify(nizKorisnika))
    }
    nizKorisnika=JSON.parse(localStorage.getItem("nizKorisnika"))
    let ime=document.getElementById("Username").value
    let lozinka=document.getElementById("Password").value
    let nadjeno=0
    if(ime=='' || lozinka==''){
        if(jezik=='e'){
            document.getElementById('porukaPrijava').innerHTML="Input all data!"
        }else{
            document.getElementById('porukaPrijava').innerHTML="Unesite podatke!"
        }
       
    }else{

        for(let i=0; i<nizKorisnika.length; i++){
            if(nizKorisnika[i].ime==ime && nizKorisnika[i].lozinka==lozinka){
                localStorage.setItem("ulogovani", ime)
                nadjeno=1
               window.location.href='pocetna.html'
            }
        }
        if(nadjeno==0){
            if(jezik=='e'){
                document.getElementById('porukaPrijava').innerHTML="User do not exist!"
            }else{
                document.getElementById('porukaPrijava').innerHTML="Korisnik ne postoji!"
            }
            
        }

    }


}
function prijavaE(){
    let jezik='e'
    
    if(localStorage.getItem("nizKorisnika")==null){
        nizKorisnika=[

            {
                ime: "_",
                lozinka: "_", 
                telefon: "_",
                email: "_"
            }
        
        ]

        localStorage.setItem("nizKorisnika", JSON.stringify(nizKorisnika))
    }
    nizKorisnika=JSON.parse(localStorage.getItem("nizKorisnika"))
    let ime=document.getElementById("Username").value
    let lozinka=document.getElementById("Password").value
    let nadjeno=0
    if(ime=='' || lozinka==''){
        if(jezik=='e'){
            document.getElementById('porukaPrijava').innerHTML="Input all data!"
        }else{
            document.getElementById('porukaPrijava').innerHTML="Unesite podatke!"
        }
       
    }else{

        for(let i=0; i<nizKorisnika.length; i++){
            if(nizKorisnika[i].ime==ime && nizKorisnika[i].lozinka==lozinka){
                localStorage.setItem("ulogovani", ime)
                nadjeno=1
               window.location.href='pocetna.html'
            }
        }
        if(nadjeno==0){
            if(jezik=='e'){
                document.getElementById('porukaPrijava').innerHTML="User do not exist!"
            }else{
                document.getElementById('porukaPrijava').innerHTML="Korisnik ne postoji!"
            }
            
        }

    }


}

function nalog(){
    if(localStorage.getItem("ulogovani")=="" || localStorage.getItem("ulogovani")==null){
        window.location.href='greska.html'
        return;
    }
    if(localStorage.getItem("listaOglasa")==null){
        localStorage.setItem("listaOglasa", JSON.stringify(listaOglasa))
    }
    if(localStorage.getItem("listaKomentara")==null){
        localStorage.setItem("listaKomentara", JSON.stringify(listaKomentara))
    }
    listaOglasa=JSON.parse(localStorage.getItem("listaOglasa", listaOglasa))
   
    let ulogovani=localStorage.getItem("ulogovani")
    let ukupnoizgubljenih=listaOglasa.length
    for(let i=1; i< ukupnoizgubljenih; i++){
       if(listaOglasa[i].korisnik==ulogovani){
            let a=$("<td></td>").addClass("ime").append(listaOglasa[i].id+". "+listaOglasa[i].imezivotinje)
            let b=$("<td></td>").addClass("op").append(listaOglasa[i].opis)
            let c=$("<td></td>").addClass("tel").append("Kontakt: "+listaOglasa[i].telefon)
            let x=$("<table></table>").append(
    
                
                $("<tr></tr>").append(a).addClass("oglastext")
    
    
            ).append(
               
                $("<tr></tr>").append(b).addClass("oglastext")
    
            ).append(
                
                $("<tr></tr>").append(c).addClass("oglastext")
    
            ).addClass("info")
    
            a=$("<td></td>")
            d=$("<tr></tr>").append(a)
            
    
            a=$("<td></td>").append("<input type=submit class='obrisiOglas' value='Obriši oglas'></input>")
            b=$("<tr></tr>").append(a)
            c=$("<table></table>").append(d).append(b)
            listaKomentara=JSON.parse(localStorage.getItem("listaKomentara"))
            d=$("<div></div>").addClass("email_box").addClass('cen').addClass("col-lg-6 col-md-1")
            inpt=$("<div></div>").addClass("input_main")
            cnt=$("<div></div>").addClass("container")
            s=$("<div></div>").addClass("col-sm-2")
            s.append(x).append(c)
            cnt.append(s)
            inpt.append(cnt)
            d.append(inpt)
    
            $("#ogl").append(d)
            
           
            
        
       }

    }


   

    /*Ovo je za ispis komentara */
   
    tr=localStorage.getItem("ulogovani")
    let x=$("<table></table>")
    for(let i=0; i<listaKomentara.length; i++){
        
        if(listaKomentara[i].kom.startsWith(tr)){
            k= $("<td></td>").append(listaKomentara[i].kom).append('<hr>').addClass("col-sm-4");
            k=$("<tr></tr>").append(k).addClass("kom").addClass('tekstOglas');
            
            x.append(k)
        }

    }
  
    inpt=$("<div></div>").addClass("input_main").addClass('tekstOglas');
    cnt=$("<div></div>").addClass("container").addClass('tekstOglas');
    cnt.append(x)
    inpt.append(cnt)
    

    $("#mojiKomentari").addClass('tekstOglas').append(inpt)

}


    

function myMap() {
    const lokacija = { lat: 44.7163, lng: 21.17259 };
    var mapProp= {
  center: lokacija,
  zoom: 7,
    };
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
const marker = new google.maps.Marker({
    position: lokacija,
    map: map,
  });
}


function sortiraj(){
   // var option = document.getElementById("sortOpcija");
  //  var izabrano = option.value;
    var param, smer;
    if(document.getElementById("nameAsc").checked) param="imena", smer="asc";
    else if(document.getElementById("nameDsc").checked) param="imena", smer="dsc";
    else if(document.getElementById("yearAsc").checked) param="godine", smer="asc";
    else if(document.getElementById("yearDsc").checked) param="godine", smer="dsc";
    else return;

    var i, switching, parametar, shouldSwitch, zivotinje;
    switching = true;

    while (switching) {
        switching = false;
        parametar = document.getElementsByClassName(param); 
        zivotinje = document.getElementsByClassName("zivSort");
        for (i = 0; i < (parametar.length - 1); i++) {
            shouldSwitch = false;
            if (parametar[i].innerHTML.toLowerCase() > parametar[i + 1].innerHTML.toLowerCase() && smer=="asc") {
                shouldSwitch = true;
                break;
            }
            else if (parametar[i].innerHTML.toLowerCase() < parametar[i + 1].innerHTML.toLowerCase() && smer=="dsc") {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            zivotinje[i].parentNode.insertBefore(zivotinje[i + 1], zivotinje[i]);
            switching = true;
        }
    }
}

function pretraga(){

   window.location.hash = "";
   var found = false;
   var ime = document.getElementById("imeP").value;
   var godine = parseInt(document.getElementById("godineP").value);
   var neuspeh = document.getElementById("neuspesnaPretraga");
   neuspeh.style.display = "none";
   var vrsta = document.getElementById("vrsta").innerHTML;
   var zivotinje = JSON.parse(localStorage.getItem(vrsta));
   for(let i = 0; i < zivotinje.length; i++){
       if(!godine && ime.toLowerCase() == zivotinje[i].ime.toLowerCase()){
        window.location.hash = zivotinje[i].ime;
        found = true;
        break;
       }
       else if(!ime && godine == zivotinje[i].godine) {
        window.location.hash = zivotinje[i].ime;
        found = true;
        break;
       }
       else if(ime.toLowerCase() == zivotinje[i].ime.toLowerCase() && godine == zivotinje[i].godine){
        window.location.hash = zivotinje[i].ime;
        found = true;
        break;
       }
   }
   if(!found) neuspeh.style.display = "block";
}


function login(){
    
    if(localStorage.getItem("ulogovani")=="" || localStorage.getItem("ulogovani")==null){
        window.location.href='greska.html'
    }
}


function logout(){
    localStorage.setItem("ulogovani", "")
    window.location.href='prijava.html'
}


function breadcrumbs(){
    var breadcrumb = document.getElementById("breadcrumbs").innerHTML;
    var niz = [];
    if(localStorage.getItem("breadcrumbs") == null) localStorage.setItem("breadcrumbs",JSON.stringify(niz));
    var breadcrumbs = JSON.parse(localStorage.getItem("breadcrumbs"));
  //  breadcrumbs.push(breadcrumb);
  //  localStorage.setItem("breadcrumbs", JSON.stringify(breadcrumbs));
    for(let i = 0;i < breadcrumbs.length;i++){
        if(breadcrumbs[i] == breadcrumb) break;
        niz.push(breadcrumbs[i]);
    }
    niz.push(breadcrumb);
    localStorage.setItem("breadcrumbs", JSON.stringify(niz));

    var klase = document.getElementsByClassName('col-md-12');
    var parent = klase[0];
    document.getElementById("breadcrumbs").remove();

    for(let i = 0; i<niz.length;i++){
        var brc = document.createElement("a");
        var spanEl = document.createElement("span");
        spanEl.innerHTML = "->"
        var link = document.createTextNode(niz[i]);
        var hrefStr = niz[i] + ".html";
        brc.appendChild(link);
        brc.title = niz[i];
        brc.href = hrefStr;
      //  document.getElementById("breadcrumbs").appendChild(brc);
        parent.appendChild(brc);
        if(i < niz.length - 1) parent.appendChild(spanEl);

    }

}