var cont = 1;

function clicar(){
    novaDiv = document.createElement("div");
        novaDiv.innerHTML = `<form> 
        <fieldset>
            <label for="adicionar">Incluir este personagem na batalha?</label>
            <input type="radio" id="incluir" name="incluir"><br>
            <label for="nome_personagem1">Nome do seu Personagem</label>
            <input type="text" name="nome_personagem1">
        </fieldset>
        
        <fieldset>
            <p>Habilidades</p>
    
            <input type="number"name="forca">  
            <label for="forca">Força</label><br>       
            <input type="number"name="precisao">
            <label for="precisao">Precisão</label><br>
            <input type="number"name="velocidade">
            <label for="velocidade">Velocidade</label><br>
            <input type="number"name="armadura">
            <label for="armadura">Armadura  </label><br>
            <input type="number"name="recuperacao">
            <label for="recuperacao">Recuperação</label><br>
        </fieldset>
        
        <fieldset>
            <p>Nação</p>
            <input type="radio" id="anao" name="nacao" checked>
            <label for="anao">Anão</label><br>
            <input type="radio" id="hobbit" name="nacao">
            <label for="hobbit">Hobbit</label><br>
            <input type="radio" id="cavaleiro" name="nacao">
            <label for="cavaleiro">Cavaleiro de Rohan</label><br>
            <input type="radio" id="guerreiro" name="nacao">
            <label for="guerreiro">Guerrreiro de Condor</label><br>
            <input type="radio" id="elfo" name="nacao">
            <label for="elfo">Elfo da Floresta</label><br>
            <input type="radio" id="elfolo" name="nacao">
            <label for="elfolo">Elfo Lothlórien</label><br>
            <input type="radio" id="orc" name="nacao">
            <label for="orc">Orc Snaga</label><br>
            <input type="radio" id="uruk" name="nacao">
            <label for="uruk">Uruk-hai</label><br>
        </form>
        <div><button type="button1" id="button1">Enviar</button></div>
        </fieldset>`;
    if(cont < 8)
    {
        document.getElementById("container_form").appendChild(novaDiv);
        cont++
    }
}v