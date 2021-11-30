@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

body[data-aos-duration='4000'] [data-aos],
[data-aos][data-aos][data-aos-duration='4000'] {
  transition-duration: 4000ms;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}

body{
  min-height: 100vh;
  width: 100%;
  height: 720px;
  position: absolute;
  flex-direction: column;
}
/* custom scroll bar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::selection{
background: rgb(0,123,255,0.3);
}
.content{
max-width: 1250px;
margin: auto;
padding: 0 30px;
}
.navbar{
position: fixed;
width: 100%;
z-index: 2;
padding: 25px 0;
transition: all 0.3s ease;
}
.navbar.sticky{
background: #1b1b1b;
padding: 10px 0;
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
}
.navbar .content{
display: flex;
align-items: center;
justify-content: space-between;
}
.navbar .logo a{
color: #fff;
font-size: 30px;
font-weight: 600;
text-decoration: none;
}
.navbar .menu-list{
display: inline-flex;
}
.menu-list li{
list-style: none;
}
.menu-list li a{
color: #fff;
font-size: 18px;
font-weight: 500;
margin-left: 25px;
text-decoration: none;
transition: all 0.3s ease;
}
.menu-list li a:hover{
color: #007bff;
}

/* MAIN CONTENT */
.bodysection{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column;
  /* background-color: aqua; */
}
.intro{
  width: 97%;
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  height: 580px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(52,211,153);
  background: linear-gradient(180deg, rgba(52,211,153,1) 0%, rgba(110,231,183,1) 100%); 
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.intro .int1 {
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 1rem;
  color: white;
}
.intro .int1 h1{
  font-size: 40px;
}
.intro .int2{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
.intro .int2 h1{
  font-size: 25px;
  font-weight: bold;
}
.intro .int2 img{
  width: 50%;
  border-radius: 150px;
  margin: 2rem 2rem;
}
.int1 .but{
  margin-top: 10%;
  width: 100%;
  height: auto;
}
.int1 .but a{
  text-decoration: none;
  margin: 0px 10px;
}
.int1 .but #source-code{
  color: white;
  font-size: 20px;
  padding: 8px 15px;
  background-color: #FC427B;
  border-radius: 5px;
}
.int1 .but #covid{
  color: white;
  font-size: 20px;
  padding: 8px 15px;
  background-color: #6D214F;
  /* border: 2px solid #6D214F; */
  border-radius: 5px;
}
.int1 .but #source-code:hover{
  border: none;
  background-color: #6D214F;
}
.int1 .but #covid:hover{
  border: 0px solid #6D214F;
  background: none;
}
/* MAIN QUOTE */
.quote{
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  margin-top: 3%;
  /* flex-direction: row; */
}
.bodyquote{
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  border-right: 10px solid #10B981;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.textquote{
  width: 100%;
  height: auto;
  padding: 1rem 1rem;
}
.imgquote{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.imgquote img{
  width: 50%;
}

/* MAIN CORONA */
.coronaa{
  margin-top: 5%;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.bodycorona{
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 85%;
}
.bodycorona .imgcorona{
  width: 40%;
  /* background-color: black; */
}
.bodycorona .imgcorona img{
  width: 100%;
}
.bodycorona .textcorona{
  width: 50%;
  /* background-color: brown; */
}

/* MAIN VAKSIN */
.vaksin{
  margin-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.vaksin .bodyvaksin{
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  border-left: 10px solid #10B981;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.bodyvaksin .textvaksin{
  width: 60%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 1rem;
  /* text-align: center; */
  /* align-items: center; */
  /* background-color: blueviolet; */
  /* margin-top: 5%; */
}
.bodyvaksin .imgvaksin{
  align-items: center;
  width: 40%;
}
.bodyvaksin .imgvaksin img{
  width: 80%;
}


/* RESPONSIVE MOBILE */

@media (max-width: 1230px) {
  .content{
    padding: 0 60px;
  }
}
@media (max-width: 1100px) {
  .content{
    padding: 0 40px;
  }
}
@media (max-width: 900px) {
  .content{
    padding: 0 30px;
  }
}
@media (max-width: 868px) {
  body.disabled{
    overflow: hidden;
  }
  .icon{
    display: block;
  }
  .icon.hide{
    display: none;
  }
  .navbar .menu-list{
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 400px;
    left: -100%;
    top: 0px;
    display: block;
    padding: 40px 0;
    text-align: center;
    background: #222;
    transition: all 0.3s ease;
  }
  .navbar.show .menu-list{
    left: 0%;
  }
  .navbar .menu-list li{
    margin-top: 45px;
  }
  .navbar .menu-list li a{
    font-size: 23px;
    margin-left: -100%;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .navbar.show .menu-list li a{
    margin-left: 0px;
  }
}
@media (max-width: 380px) {
  .navbar .logo a{
    font-size: 27px;
  }
}