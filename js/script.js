const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active das tabs e conteúdos
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));

      // Ativa a aba clicada e o conteúdo correspondente
      tab.classList.add('active');
      const activeTab = tab.dataset.tab;
      document.getElementById(activeTab).classList.add('active');
    });
  });