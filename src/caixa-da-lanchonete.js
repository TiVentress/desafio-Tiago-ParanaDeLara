class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        const formasDePagamento = ["dinheiro", "debito", "credito"];

        if (!formasDePagamento.includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let total = 0;
        let extras = {};

        for (const item of itens) {
            const [codigo, quantidade] = item.split(",");
            const precoItem = this.cardapio[codigo];

            if (!precoItem) {
                return "Item inválido!";
            }

            if (quantidade === "0") {
                return "Quantidade inválida!";
            }

            if (!extras[codigo]) {
                extras[codigo] = 0;
            }
            
            if (codigo !== "chantily" && codigo !== "queijo") {
                if (extras[codigo] < quantidade) {
                    total += precoItem * (quantidade - extras[codigo]);
                    extras[codigo] = quantidade;
                }
            } else if (
                (codigo === "chantily" && extras["cafe"] > 0) ||
                (codigo === "queijo" && extras["sanduiche"] > 0)
            ) {
                extras[codigo] += quantidade;
                total += precoItem * quantidade;
            } else {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if (metodoDePagamento === "dinheiro") {
            total *= 0.95;
        } else if (metodoDePagamento === "credito") {
            total *= 1.03;
        }

        return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }
}

export { CaixaDaLanchonete };