*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body[data-aos-duration='4000'] [data-aos],
[data-aos][data-aos][data-aos-duration='4000'] {
  transition-duration: 4000ms;
}

body{
  width: 100%;
  height: auto;
}

.header{
  display: flex;
  justify-content: space-between;
  color: white;
}
.header .jdl{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 40%;
}
.header .jdl img{
  width: 35px;
  height: 35px;
}
.header .jdl h4{
  margin: 6px 5px;
  font-weight: 600;
}
.header .menu{
  width: 40%;

}
.header .menu .list{
  display: flex;
  flex-direction: row;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  z-index: 999;
  transition: 0.6s;
}

header.sticky{
  background-color: #30c790;
  padding: 5px 100px;
/* color: black; */
}

header .menu{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

header .menu a{
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(226, 226, 226);
  margin-left: 10px;
  padding: 10px 15px;
  border-radius: 15px;
  transition: 0.3s;
  transition-property: color, background;
}

header .menu a:hover{
  color: rgb(255, 255, 255);
}

header .btn{
  font-size: 25px;
  cursor: pointer;
  color: #fff;
  display: none;
}

@media (max-width: 1024px) {
  header .btn{
    display: block;
  }

  header .menu.active{
    right: 0;
  }

  header .menu{
    position: fixed;
    background: #a81b24;
    flex-direction: column;
    min-width: 400px;
    height: 100vh;
    top: 0;
    right: -100%;
    padding: 80px 50px;
    transition-property: right;
    transition: 0.5s;
  }

  header .menu .close-btn {
    position: absolute;
    top: 0;
    left: 0;
    margin: 25px;
  }

  header .menu a{
    display: block;
    font-size: 16px;
    margin: 20px;
    padding: 0 15px;
  }
}

@media (max-width: 375px) {
  .section-main h1{
    font-size: 50px;
    line-height: 60px;
  }
}

/* BACKGROUND */

.body2{
  margin-top: -8%;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: -99;
}
.childbody2{
  width: 100%;
  height: 560px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
  background: linear-gradient(180deg, rgba(52,211,153,1) 0%, rgba(110,231,183,1) 100%); 
}

/* MAIN MODAL */
.modall{
  margin-top: 5%;
  width: 100% !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.bodymodal{
  width: 85% !important; 
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bodymodal .textskil{
  margin-bottom: 5%;
}
/* .textskil{
  margin-left: -5%;
} */
.modalbagan1, .modalbagan2{
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* margin-top: 5% */
}

/* MAIN PROGRESS */
.wrapper{
  margin-top: 7%;
}
.wrapper, .grapich{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.textskil1, .textskil2{
  width: 85%;
  height: auto;
  text-align: start;
  display: flex;
  background-color: #ffffff;
  border-left: 5px solid #EC4899;
  padding: 1rem 2rem;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
  font-weight: bold;
}
.textskil2{
  width: 100%;
  margin-bottom: 3%;
}
.textskil1 h4, .textskil2 h4{
  color: black;
  font-size: 23px;
  margin: -.1rem -.2rem;
  /* font: bolder; */
  /* margin-top: -.2rem; */
}
.grapich{
  width: 85%;
  margin-top: 1%;
  background-color: #FDF2F8;
  border-radius: 10px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.wrapper .card{
  margin: 2rem 2rem;
  background: #fff;
  width: calc(33% - 20px);
  height: 300px;
  width: 20%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.wrapper .card .circle{
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  cursor: default;
}
.card .circle .box,
.card .circle .box span{
  position: absolute;
  top: 50%;
  left: 50%;
}
.card .circle .box{
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  transition: all 0.2s;
}
.card .circle:hover .box{
  transform: translate(-50%, -50%) scale(0.91);
}
.card .circle .box span,
.wrapper .card .text{
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.circle .box span{
  font-size: 38px;
  font-family: sans-serif;
  font-weight: 600;
  transform: translate(-45%, -45%);
  transition: all 0.1s;
}
.card .circle:hover .box span{
  transform: translate(-45%, -45%) scale(1.09);
}
.card .text{
  font-size: 20px;
  font-weight: 600;
}
@media(max-width: 753px){
  .wrapper{
    max-width: 700px;
  }
  .wrapper .card{
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }
}
@media(max-width: 505px){
  .wrapper{
    max-width: 500px;
  }
  .wrapper .card{
    width: 100%;
  }
}