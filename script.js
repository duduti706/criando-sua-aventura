const avanca = document .querySelectorAll('.btn-proximo');

avanca.forEach(button => {
 button.addEventlistener('click', function(){
      const atual = document.querySelector('.ativo');
      const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

      atual.classlist.remove('ativo');
      document.getElementbyid(proximoPasso).classlist.add('ativo');
    })
})