function getCookie(name) {
    // クッキーをすべて取得
    let cookies = document.cookie.split(';');
    
    // 各クッキーをチェック
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      
      // クッキーの名前が一致するか確認
      if (cookie.startsWith(name + '=')) {
        // クッキーの値を返す
        return cookie.substring((name + '=').length, cookie.length);
      }
    }
    
    // クッキーが見つからなかった場合
    return null;
  }

window.onload = function() {
    if(getCookie('flag') === null){
        location.href = "redirect.html";
    }else{
        document.querySelector('body').classList.remove('hidden');
    }

    document.querySelector('.hamburger').addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('.slide-menu').classList.toggle('active');
        document.querySelector('.content').classList.toggle('active');
    });
}
