var app = new function() {
    this.el = document.getElementById('name');
  
    this.name = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.name.length > 0) {
        for (i = 0; i < this.name.length; i++) {
          data += '<tr>';
          data += `<td><span>${i + 1}. </span><span>${this.name[i]}</span></td>`
          data += `<td><button onclick="app.Edit('${i}')" class="btn btn-outline-warning">Edit</button></td>`
          data += `<td><button onclick="app.Delete('${i}')"  class="btn btn-outline-danger">Delete</button></td>`;
          data += '</tr>';
        }
      }
  
      this.Count(this.name.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-member');
      // 값 받아 오기
      var member = el.value;
  
      if (member) {
        // 새로운 값 입력 받기.
        this.name
    .push(member.trim());
        // 받은 입력값 리셋
        el.value = '';
        // 디스플레이 새로운 리스트
        this.FetchAll();
      }
    };
  
    this.search = function() {
      nameSelector = document.getElementById("name");
      searchvalue = document.getElementById('search-member')
  
      var nam = nameSelector.querySelectorAll('td > span')
      var sea = searchvalue.value
  
      for(i=1; i<100; i=i+2){
        if(nam[i].textContent === sea){
          document.writeln(sea);
        }
    }
  }
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-member');
      // 디스플레이 값 필드
      el.value = this.name[item];
      // 디스플레이 필드
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        // 값을 받기
        var member = el.value;
  
        if (member) {
          // 값 수정
          self.name.splice(item, 1, member.trim());
          // 디스플레이 새로운 리스트
          self.FetchAll();
          // 필드 숨기기
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // 현재 행 삭제
      this.name.splice(item, 1);
      // 디스플레이 새로운 리스트
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = '명의 회원이 있습니다.';
  
      if (data) {
          if(data ==1){
              name = '명의 회원이 있습니다.'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = '0 ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
    document.writeln("gd");
  }
  