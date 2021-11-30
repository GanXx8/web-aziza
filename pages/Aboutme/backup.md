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
/* MAIN ABOUT */
.mainaboutme{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 6% 0;
  background: linear-gradient(180deg, rgba(52,211,153,1) 0%, rgba(110,231,183,1) 100%); 
  /* align-items: center; */
}
.mainaboutme .bodyaboutme{
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  /* align-items: center; */
  background-color: white;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
  width: 85%;
  border-right: 10px solid crimson;
}
.bodyaboutme .imgaboutme{
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
}
.bodyaboutme .imgaboutme img{
  width: 70%;
  /* padding: 10rem 10rem ; */
}
.bodyaboutme .textaboutme{
  width: 60%;
  padding: 3rem 1rem;
}


/* MAINCONTAC  */
.bodycontac{
  margin-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.bodycontac .contac{
  width: 90%;
}
.contac .textcontac{
  width: 100%;
  border-left: 5px solid salmon;
  padding: .5rem 1rem;
  border-radius: 3px;
  background-color: rgb(245, 245, 245);
  /* background-color: blueviolet; */
}
.contac .imgcontac{
  margin-top: 2%;
  width: 100%;
  /* background-color: brown; */
}
.contac .imgcontac img{
  /* box-shadow: 0px 10px 15px rgba(0,0,0,0.1); */
  width: 5%;
}
