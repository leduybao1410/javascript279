function showHeader(activePage) {
  let trangchu = '';
  let gioithieu = '';
  let tintuc = '';
  let lienhe = '';
  switch (activePage) {
    case 'trangchu':
      trangchu = 'active';
      writeheader();
      break;
    case 'gioithieu':
      gioithieu = 'active';
      writeheader()
      break;
    case 'tintuc':
      tintuc = 'active';
      writeheader()
      break;
    case 'lienhe':
      lienhe = 'active';
      writeheader()
      break;
    default:
      writeheader();
  }
  function writeheader() {
    document.write(`
        <header class="mt-4 container header">
          <div class="row">
            <div class="col-1">
              <a href="#"><img src="../images/duybaoIMG/logoCirle-150x150.png" class=" ml-3 img-fluid rounded-circle "></a>
            </div>
            <div class="col-9">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link ${trangchu}" href="#">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${gioithieu}" href="#">Giới thiệu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Dòng sản phẩm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${tintuc}" href="#">Tin tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${lienhe}" href="#">Liên hệ</a>
              </li>
            </ul>
            </div>
            <div class="col-2"></div>
          </div>
        </header>
        `)
  }
}

const body = document.body;
window.addEventListener('scroll', ()=>{
  const currentScroll = window.pageYOffset;
  if(currentScroll > 0){
    console.log(currentScroll);
  }
})

