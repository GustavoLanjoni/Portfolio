const servicosDetalhes = {
  "social-media": {
    titulo: "Social Media",
    descricao: "Pacote completo com 10 artes otimizadas para Instagram, Facebook e outras redes sociais. Inclui briefing personalizado, criação estratégica baseada em sua identidade visual, e formatos adaptáveis para feed e stories. Ideal para aumentar engajamento e reforçar a presença online da sua marca."
  },
  "banner-web": {
    titulo: "Banner Web",
    descricao: "Criação de banner digital profissional para campanhas promocionais, anúncios e destaques de produtos. Otimizado para carregamento rápido e compatível com diferentes tamanhos de tela e plataformas como Google Ads, sites e redes sociais."
  },
  "pagina-vendas": {
    titulo: "Página de Vendas",
    descricao: "Desenvolvimento de uma landing page altamente persuasiva com foco em conversão. Estrutura otimizada para apresentar seu produto ou serviço de forma clara, com seções estratégicas, chamada para ação, design responsivo e layout personalizado."
  },
  "loja-ecommerce": {
    titulo: "Loja E-commerce",
    descricao: "Desenvolvimento de loja virtual completa com sistema de pagamento (Pix, cartão, boleto), carrinho de compras, controle de estoque, categorias, painel administrativo e layout moderno. Ideal para quem deseja vender produtos online com praticidade e segurança."
  },
  "atualizacao-datas": {
    titulo: "Atualização de Datas Comemorativas",
    descricao: "Criação de banners e posts especiais para datas sazonais (como Natal, Dia das Mães, Black Friday, etc). As artes seguem sua identidade visual e ajudam a aproveitar o engajamento dessas datas para promover ofertas ou reforçar a marca."
  },
  "identidade-visual": {
    titulo: "Identidade Visual",
    descricao: "Criação completa da identidade visual da sua marca: logotipo, paleta de cores, tipografia, elementos gráficos e aplicações básicas (como perfil de redes sociais). Tudo alinhado ao posicionamento e público-alvo da sua empresa."
  },
  "otimizacao-seo": {
    titulo: "Otimização SEO",
    descricao: "Aprimoramento técnico e estratégico do seu site para posicioná-lo nas primeiras páginas do Google. Inclui análise de palavras-chave, otimização de títulos, meta descrições, imagens, performance e boas práticas de SEO on-page."
  },
  "integracao-whatsapp": {
    titulo: "Integração com WhatsApp e Redes",
    descricao: "Adição de botões e widgets interativos de contato direto com WhatsApp, Instagram e outros canais. Facilita o atendimento, aumenta as conversões e melhora a experiência do visitante no seu site."
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
      modalDescricao.textContent = servicosDetalhes[servico].descricao;
      modal.style.display = 'flex';

      btnContratar.onclick = () => {
        alert(`Você escolheu contratar o serviço: ${servicosDetalhes[servico].titulo}`);
        modal.style.display = 'none';
      };
    }
  });
});

btnFechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
