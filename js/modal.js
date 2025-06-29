const servicosDetalhes = {
  "social-media": {
    titulo: "Social Media",
    descricao: "Pacote completo com 10 artes otimizadas para Instagram, Facebook e outras redes sociais. Criamos conteúdos personalizados para o seu público e estratégia.",
    preco: "R$ 250"
  },
  "banner-web": {
    titulo: "Banner Web",
    descricao: "Banner profissional e atraente para divulgação online, ajustado para diversos formatos e plataformas.",
    preco: "R$ 120"
  },
  "pagina-vendas": {
    titulo: "Página de Vendas",
    descricao: "Landing page moderna, focada em conversão, com design responsivo e otimizado para o seu público.",
    preco: "R$ 790"
  },
  "loja-ecommerce": {
    titulo: "Loja E-commerce",
    descricao: "Loja virtual completa com carrinho, categorias, painel administrativo e sistema de pagamento integrado.",
    preco: "R$ 1290"
  },
  "atualizacao-datas": {
    titulo: "Atualização de Datas",
    descricao: "Criação de artes comemorativas e banners temáticos para datas especiais, promoções e temporadas.",
    preco: "R$ 90"
  },
  "identidade-visual": {
    titulo: "Identidade Visual",
    descricao: "Criação de logo, paleta de cores, tipografia e demais elementos visuais para destacar sua marca.",
    preco: "R$ 690"
  },
  "otimizacao-seo": {
    titulo: "Otimização SEO",
    descricao: "Estratégias para posicionar seu site nas primeiras posições do Google, aumentando o tráfego orgânico.",
    preco: "R$ 320"
  },
  "integracao-whatsapp": {
    titulo: "Integração WhatsApp",
    descricao: "Botões e widgets para contato direto via WhatsApp, Instagram e outras plataformas, facilitando a comunicação.",
    preco: "R$ 180"
  }
};

const modal = document.getElementById('modal-servico');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const btnContratar = document.getElementById('btn-contratar');
const btnFechar = document.querySelector('.modal-close');

document.querySelectorAll('.btn-ver-detalhes').forEach(botao => {
  botao.addEventListener('click', () => {
    const servico = botao.closest('.card-preco').dataset.servico;
    if (servicosDetalhes[servico]) {
      modalTitulo.textContent = servicosDetalhes[servico].titulo;
      modalDescricao.textContent = servicosDetalhes[servico].descricao + "\n\nPreço: " + servicosDetalhes[servico].preco;
      modal.style.display = 'flex';

      // Pode usar btnContratar para redirecionar ou disparar ação
      btnContratar.onclick = () => {
        alert(`Você escolheu contratar o serviço: ${servicosDetalhes[servico].titulo}`);
        // Aqui pode colocar o redirecionamento para formulário, whatsapp, etc.
        modal.style.display = 'none';
      };
    }
  });
});

btnFechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal clicando fora do conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
