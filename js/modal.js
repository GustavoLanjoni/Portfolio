const servicosDetalhes = {
  "social-media": {
    titulo: "Social Media",
    descricao: "Pacote completo com 10 artes personalizadas, otimizadas para Instagram, Facebook e outras redes sociais. Inclui briefing estratégico, criação alinhada à identidade visual da sua marca e formatos adaptados para feed, stories e anúncios. Ideal para aumentar o engajamento, ampliar o alcance e fortalecer sua presença digital."
  },
  "banner-web": {
    titulo: "Banner Web",
    descricao: "Design profissional e moderno para banners digitais, perfeito para campanhas promocionais, anúncios online e divulgação de produtos. Otimizado para rápida visualização e compatível com múltiplas plataformas como Google Ads, redes sociais e sites."
  },
  "pagina-vendas": {
    titulo: "Página de Vendas",
    descricao: "Landing page altamente persuasiva, desenvolvida com foco em conversão e experiência do usuário. Estrutura pensada para apresentar seu produto ou serviço de forma clara e envolvente, com design responsivo, chamadas para ação estratégicas e layout personalizado para maximizar vendas."
  },
  "loja-ecommerce": {
    titulo: "Loja E-commerce",
    descricao: "Desenvolvimento completo de loja virtual, com integração de métodos de pagamento (Pix, cartão, boleto), carrinho de compras, controle de estoque, categorias organizadas e painel administrativo intuitivo. Tudo isso aliado a um design moderno e responsivo, garantindo praticidade e segurança para seu negócio online."
  },
  "atualizacao-datas": {
    titulo: "Atualização de Datas Comemorativas",
    descricao: "Criação de artes temáticas e banners especiais para datas comemorativas e temporadas promocionais (Natal, Dia das Mães, Black Friday, etc). As peças são desenvolvidas seguindo sua identidade visual, para gerar impacto e aproveitar oportunidades de engajamento e vendas."
  },
  "identidade-visual": {
    titulo: "Identidade Visual",
    descricao: "Desenvolvimento completo da identidade visual da sua marca, incluindo criação de logotipo, paleta de cores, tipografia e elementos gráficos. Aplicações básicas para uso em redes sociais, documentos e marketing, garantindo consistência e reconhecimento da sua marca no mercado."
  },
  "otimizacao-seo": {
    titulo: "Otimização SEO",
    descricao: "Serviço técnico e estratégico para posicionar seu site nas primeiras posições do Google. Inclui análise aprofundada de palavras-chave, otimização de títulos, meta descrições, imagens e desempenho geral, além da aplicação das melhores práticas SEO on-page para aumentar seu tráfego orgânico e visibilidade."
  },
  "integracao-whatsapp": {
    titulo: "Integração com WhatsApp e Redes",
    descricao: "Implementação de botões e widgets interativos para contato direto via WhatsApp, Instagram e outras redes sociais. Facilita o atendimento ao cliente, aumenta a taxa de conversão e melhora a experiência do visitante em seu site, proporcionando comunicação rápida e eficiente."
  }
};


const modal = document.getElementById('modal-servico');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const btnContratar = document.getElementById('btn-contratar');
const btnFechar = document.querySelector('.modal-close');

// Modal contratar e seus elementos
const modalContratar = document.getElementById('modal-contratar');
const fecharContratar = document.getElementById('fechar-contratar');
const formContratar = document.getElementById('form-contratar');

// Variável para guardar o serviço selecionado no momento
let servicoSelecionado = null;

// Abrir modal detalhes
document.querySelectorAll('.btn-ver-detalhes').forEach(botao => {
  botao.addEventListener('click', () => {
    servicoSelecionado = botao.closest('.card-preco').dataset.servico;
    if (servicosDetalhes[servicoSelecionado]) {
      modalTitulo.textContent = servicosDetalhes[servicoSelecionado].titulo;
      modalDescricao.textContent = servicosDetalhes[servicoSelecionado].descricao;
      modal.style.display = 'flex';
    }
  });
});

// Botão contratar dentro do modal detalhes
btnContratar.onclick = () => {
  if (!servicoSelecionado) return;
  modal.style.display = 'none';
  modalContratar.style.display = 'flex';
};

// Fechar modal detalhes
btnFechar.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Fechar modal contratar
fecharContratar.onclick = () => {
  modalContratar.style.display = 'none';
};
modalContratar.addEventListener('click', (e) => {
  if (e.target === modalContratar) {
    modalContratar.style.display = 'none';
  }
});

// Enviar formulário via WhatsApp
formContratar.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomeUsuario = formContratar.nomeUsuario.value.trim();
  const ramoEmpresa = formContratar.ramoEmpresa.value.trim();
  const detalhesProjeto = formContratar.detalhesProjeto.value.trim();

  if (!nomeUsuario || !ramoEmpresa || !detalhesProjeto) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Monta a mensagem para WhatsApp (encode URI para quebra de linha e caracteres especiais)
  const mensagem = `Olá! Meu nome é *${nomeUsuario}*.%0AEstou interessado no serviço: *${servicosDetalhes[servicoSelecionado].titulo}*.%0ARamo da empresa: *${ramoEmpresa}*.%0ADetalhes do projeto:%0A${detalhesProjeto}`;

  // Substitua pelo seu número do WhatsApp com código do país (exemplo: 5511999999999)
  const numeroWhatsApp = "5517996489436";

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  // Abrir WhatsApp em nova aba
  window.open(urlWhatsApp, '_blank');

  // Fecha o modal e reseta formulário
  modalContratar.style.display = 'none';
  formContratar.reset();
});
