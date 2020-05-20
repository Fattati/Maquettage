$(document).ready(() => {
    $.post('functions.php', {
        onLoadClientEmail: localStorage.getItem('clientEmail')
    }, response => {
        $(".cartProductsNb").each((i, elem) => {
            elem.innerText = response;
        });
    });
});

function jeclick(value) {
    $.post('functions.php', {
        prodId: value,
        clientEmail: localStorage.getItem('clientEmail')
    }, async response => {
        var params = {
            content: "",
            type: "error",
            behavior: {
                type: "normal"
            },
            duration: 3000
        }
        // 
        switch (response) {
            case "100":
                params.content = "Utilisateur n'existe pas! Merci de se connecter";
                break;
            case "101":
                params.content = "Le stock est epuisé";
                break;
            case "102":
                params.content = "Vous aves déja ajouter cette produit a votre panier";
                params.type = "warning";
                break;
            default:
                $(".cartProductsNb").each((i, elem) => {
                    var nb = Number($(elem).text()) + 1;
                    elem.innerText = nb;
                });
                params.content = "Produit ajouté avec success";
                params.type = "success";
        }
        // 
        await toast(params);
    });
}