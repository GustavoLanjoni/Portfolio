const form = document.getElementById('form-orcamento');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = form.nome.value.trim();
    const servico = form.servico.value;
    const descricao = form.descricao.value.trim();
    
    if (!nome || !servico || !descricao) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    
    // Monta a mensagem para WhatsApp
    const mensagem = `Olá, meu nome é ${nome}.\nGostaria de solicitar um orçamento para o serviço: ${servico}.\nDescrição do projeto:\n${descricao}`;
    
    // Número do WhatsApp (coloque seu número com código do país e sem espaços ou sinais)
    const numeroWhatsApp = "5517996489436";
    
    // Abre o WhatsApp Web ou app no celular com a mensagem preenchida
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
    
    form.reset();
  });