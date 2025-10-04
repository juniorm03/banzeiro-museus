class HTMLLoader {
    static async carregarPartial(seletor, arquivo) {
        try {
            const response = await fetch(arquivo);
            if (!response.ok) throw new Error(`Arquivo ${arquivo} não encontrado`);
            
            const html = await response.text();
            const elemento = document.querySelector(seletor);
            
            if (elemento) {
                elemento.innerHTML = html;
                console.log(`✅ ${arquivo} carregado em ${seletor}`);
            } else {
                console.error(`❌ Elemento ${seletor} não encontrado`);
            }
        } catch (error) {
            console.error(`❌ Erro ao carregar ${arquivo}:`, error);
        }
    }
    
    static async carregarTodosPartials() {
        try {
            await Promise.all([
                this.carregarPartial('header', './elements/header.html'),
                this.carregarPartial('footer', './elements/footer.html'),
                this.carregarPartial('#social-icons-container', './elements/social-icons.html')
            ]);
            console.log('🎉 Todos os elementos foram carregados!');
        } catch (error) {
            console.error('Erro ao carregar elementos:', error);
        }
    }
}

// Carregar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    HTMLLoader.carregarTodosPartials();
});