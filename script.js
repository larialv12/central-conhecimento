document.addEventListener('DOMContentLoaded', () => {
   const dadosCards = [
      {
         imgCard: 'assets/imgCard.png',
         imgAlt: 'Homem digitando no notebook',
         logo: 'assets/logo-clinicorp-solutions 1 (1).png',
         logoAlt: 'Clinicorp',
         tags: ['iugu Cobranças', 'iugu Recorrência', 'iugu Split'],
         texto: 'Como a Clinicorp aumentou o volume de suas transações financeiras em 45% com a tecnologia da iugu'
      },
      {
         imgCard: 'assets/imgCard.png',
         imgAlt: 'Homem digitando no notebook',
         logo: 'assets/logo-clinicorp-solutions 1 (1).png',
         logoAlt: 'Clinicorp',
         tags: ['iugu Cobranças', 'iugu Recorrência', 'iugu Split'],
         texto: 'Como a Clinicorp aumentou o volume de suas transações financeiras em 45% com a tecnologia da iugu'
      },
      {
         imgCard: 'assets/imgCard.png',
         imgAlt: 'Homem digitando no notebook',
         logo: 'assets/logo-clinicorp-solutions 1 (1).png',
         logoAlt: 'Clinicorp',
         tags: ['iugu Cobranças', 'iugu Recorrência', 'iugu Split'],
         texto: 'Como a Clinicorp aumentou o volume de suas transações financeiras em 45% com a tecnologia da iugu'
      },
      
   ];

   const container = document.querySelector('.cards');

   function criarCard(dados) {
      const card = document.createElement('div');
      card.className = 'card';

      const tagsHtml = dados.tags.map(tag => `<li><span>${tag}</span></li>`).join('');

      card.innerHTML = `
         <img class="card-img" src="${dados.imgCard}" alt="${dados.imgAlt}">
         <div class="card-conteudo">
            <img class="logo" src="${dados.logo}" alt="${dados.logoAlt}">
            <div class="tags">
               <ul>${tagsHtml}</ul>
            </div>
            <p>${dados.texto}</p>
         </div>
      `;

      return card;
   }

   dadosCards.forEach(dados => {
      container.appendChild(criarCard(dados));
   });
});


