const aInfo=document.getElementById("a-info");
const aOrders=document.getElementById("a-orders");
const aAccounts=document.getElementById("a-accounts");
const aProducts=document.getElementById("a-products");
const logOut=document.getElementById("log-out");

const btnArr=[];

btnArr.push(aInfo);
btnArr.push(aOrders);
btnArr.push(aAccounts);
btnArr.push(aProducts);
btnArr.push(logOut);

btnArr.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        removeActive();
        btn.classList.add("active");
        let aMainContainer=document.createElement("div");
        aMainContainer.classList.add("a-main-container");
        let preBtn=aInfo;
        if(btn==aInfo){
            aMainContainer.innerHTML=`<div class="a-label"><h1>Thông tin cá nhân</h1></div>
            <div class="a-row">
              <div class="a-value-label">Họ và tên:</div>
              <div class="a-value">Nguyễn Văn Admin</div>
              <i class="fa-solid fa-pencil"></i>
              <span>Sửa</span>
            </div> <hr />
  
            <div class="a-row">
              <div class="a-value-label">Ngày sinh:</div>
              <div class="a-value">01/01/2002</div>
              <i class="fa-solid fa-pencil"></i>
              <span>Sửa</span>
            </div> <hr />
  
            <div class="a-row">
              <div class="a-value-label">Giới tính:</div>
              <div class="a-value">Nam</div>
              <i class="fa-solid fa-pencil"></i>
              <span>Sửa</span>
            </div> <hr />
  
            <div class="a-row">
              <div class="a-value-label">Email:</div>
              <div class="a-value">toilaadmin@gmail.com</div>
              <i class="fa-solid fa-pencil"></i>
              <span>Sửa</span>
            </div> <hr />
  
            <div class="a-row">
              <div class="a-value-label">Số điện thoại:</div>
              <div class="a-value">0987654321</div>
              <i class="fa-solid fa-pencil"></i>
              <span>Sửa</span>
            </div>
            <div class="a-label"><h1>Thiết lập</h1></div>
            <div class="a-row">
              <div class="a-value-label">Mật khẩu:</div>
              <div class="a-value">**********</div>
              <i class="fa-solid fa-pencil"></i>
              <span>Sửa</span>
            </div>`;
            if(btn!==preBtn)
                document.getElementById("a-main").appendChild(aMainContainer);
            preBtn=aInfo;
        }
        else if(btn===aOrders){
            document.getElementById("a-main").innerHTML="";
            preBtn=aOrders;
        }
        else if(btn===aAccounts){
            document.getElementById("a-main").innerHTML="";
            preBtn=aAccounts;
        }
        else if(btn===aProducts){
            document.getElementById("a-main").innerHTML="";
            preBtn=aProducts;
        }
        console.log(preBtn);
    })
})

function removeActive(){
    btnArr.forEach((btn)=>{
        btn.classList.remove("active");
    })
}