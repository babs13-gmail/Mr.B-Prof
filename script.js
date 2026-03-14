// ===== DONNÉES =====
let userProgress = {
    points: 0,
    completedExercises: [],
    badges: [],
    courseProgress: {
        html: 0,
        css: 0,
        js: 0
    }
};

// Charger la progression depuis localStorage
function loadProgress() {
    const saved = localStorage.getItem('mrbdevweb_progress');
    if (saved) {
        userProgress = JSON.parse(saved);
        updateProgressUI();
    }
}

// Sauvegarder la progression
function saveProgress() {
    localStorage.setItem('mrbdevweb_progress', JSON.stringify(userProgress));
    updateProgressUI();
}

// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    initExercises();
    initEditor();
    
    // Navigation smooth scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.substring(1));
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Burger menu
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (burger) {
        burger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===== COURS COMPLETS =====
const coursesData = {
    html: {
        title: 'HTML - Langage de balisage',
        lessons: [
            {
                title: 'Chapitre 1 : Introduction au HTML',
                content: `
                    <h2>🌐 Qu'est-ce que le HTML ?</h2>
                    <p><strong>HTML</strong> signifie <strong>HyperText Markup Language</strong> (Langage de Balisage Hypertexte).</p>
                    <p>C'est le <strong>langage fondamental</strong> de toutes les pages web. Il permet de créer la <strong>structure</strong> et le <strong>contenu</strong> d'une page.</p>
                    
                    <div style="background: rgba(99, 102, 241, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <p><strong>💡 Analogie :</strong> Si un site web était une maison, le HTML serait les murs, le toit et les fondations !</p>
                    </div>
                    
                    <h3>📋 Structure de base d'une page HTML</h3>
                    <p>Toute page HTML commence par cette structure :</p>
                    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Ma première page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bonjour le monde !&lt;/h1&gt;
    &lt;p&gt;Ceci est ma première page web.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    
                    <h3>🔍 Explication ligne par ligne :</h3>
                    <ul>
                        <li><code>&lt;!DOCTYPE html&gt;</code> : Dit au navigateur que c'est une page HTML5</li>
                        <li><code>&lt;html&gt;</code> : Balise racine, contient toute la page</li>
                        <li><code>&lt;head&gt;</code> : Informations sur la page (titre, encodage, liens CSS...)</li>
                        <li><code>&lt;meta charset="UTF-8"&gt;</code> : Encodage pour les caractères spéciaux (é, à, ç...)</li>
                        <li><code>&lt;title&gt;</code> : Titre affiché dans l'onglet du navigateur</li>
                        <li><code>&lt;body&gt;</code> : Contenu visible de la page</li>
                    </ul>
                    
                    <h3>📝 Les balises de titres (h1 à h6)</h3>
                    <p>Il existe 6 niveaux de titres, du plus important (h1) au moins important (h6) :</p>
                    <pre><code>&lt;h1&gt;Titre principal&lt;/h1&gt;
&lt;h2&gt;Sous-titre&lt;/h2&gt;
&lt;h3&gt;Section&lt;/h3&gt;
&lt;h4&gt;Sous-section&lt;/h4&gt;
&lt;h5&gt;Petit titre&lt;/h5&gt;
&lt;h6&gt;Très petit titre&lt;/h6&gt;</code></pre>
                    
                    <div style="background: rgba(239, 68, 68, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <p><strong>⚠️ Important :</strong> N'utilise qu'UN SEUL &lt;h1&gt; par page ! C'est le titre principal.</p>
                    </div>
                    
                    <h3>📄 Les paragraphes</h3>
                    <pre><code>&lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;
&lt;p&gt;Ceci est un autre paragraphe.&lt;/p&gt;</code></pre>
                    
                    <h3>🔗 Les liens</h3>
                    <pre><code>&lt;a href="https://google.com"&gt;Aller sur Google&lt;/a&gt;
&lt;a href="page2.html"&gt;Page 2&lt;/a&gt;
&lt;a href="#section"&gt;Aller à la section&lt;/a&gt;</code></pre>
                    <p><strong>href</strong> = destination du lien</p>
                    
                    <h3>🖼️ Les images</h3>
                    <pre><code>&lt;img src="photo.jpg" alt="Description de l'image"&gt;</code></pre>
                    <ul>
                        <li><code>src</code> : Chemin de l'image</li>
                        <li><code>alt</code> : Texte alternatif (si l'image ne charge pas)</li>
                    </ul>
                `
            },
            {
                title: 'Chapitre 2 : Listes et conteneurs',
                content: `
                    <h2>📋 Les listes</h2>
                    
                    <h3>Liste non ordonnée (points)</h3>
                    <pre><code>&lt;ul&gt;
    &lt;li&gt;Premier élément&lt;/li&gt;
    &lt;li&gt;Deuxième élément&lt;/li&gt;
    &lt;li&gt;Troisième élément&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                    <p><strong>Résultat :</strong></p>
                    <ul style="margin-left: 2rem;">
                        <li>Premier élément</li>
                        <li>Deuxième élément</li>
                        <li>Troisième élément</li>
                    </ul>
                    
                    <h3>Liste ordonnée (numéros)</h3>
                    <pre><code>&lt;ol&gt;
    &lt;li&gt;Étape 1&lt;/li&gt;
    &lt;li&gt;Étape 2&lt;/li&gt;
    &lt;li&gt;Étape 3&lt;/li&gt;
&lt;/ol&gt;</code></pre>
                    <p><strong>Résultat :</strong></p>
                    <ol style="margin-left: 2rem;">
                        <li>Étape 1</li>
                        <li>Étape 2</li>
                        <li>Étape 3</li>
                    </ol>
                    
                    <h3>📦 Les conteneurs</h3>
                    
                    <h4>DIV - Conteneur bloc</h4>
                    <pre><code>&lt;div&gt;
    &lt;h2&gt;Section importante&lt;/h2&gt;
    &lt;p&gt;Contenu de la section&lt;/p&gt;
&lt;/div&gt;</code></pre>
                    <p>Le <code>&lt;div&gt;</code> est un conteneur <strong>générique</strong> qui prend toute la largeur.</p>
                    
                    <h4>SPAN - Conteneur en ligne</h4>
                    <pre><code>&lt;p&gt;Ceci est un &lt;span style="color: red;"&gt;mot rouge&lt;/span&gt; dans une phrase.&lt;/p&gt;</code></pre>
                    <p>Le <code>&lt;span&gt;</code> est utilisé pour styliser une <strong>partie</strong> d'un texte.</p>
                    
                    <h3>✨ Balises sémantiques HTML5</h3>
                    <p>Ces balises ont la même fonction qu'un div, mais avec un <strong>sens</strong> :</p>
                    <pre><code>&lt;header&gt;En-tête de la page&lt;/header&gt;
&lt;nav&gt;Menu de navigation&lt;/nav&gt;
&lt;main&gt;Contenu principal&lt;/main&gt;
&lt;article&gt;Article de blog&lt;/article&gt;
&lt;section&gt;Section de contenu&lt;/section&gt;
&lt;aside&gt;Barre latérale&lt;/aside&gt;
&lt;footer&gt;Pied de page&lt;/footer&gt;</code></pre>
                    
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <p><strong>✅ Bonne pratique :</strong> Utilise les balises sémantiques au lieu de div partout !</p>
                    </div>
                `
            },
            {
                title: 'Chapitre 3 : Tableaux',
                content: `
                    <h2>📊 Les tableaux HTML</h2>
                    <p>Les tableaux permettent d'organiser des données en lignes et colonnes.</p>
                    
                    <h3>Structure de base</h3>
                    <pre><code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Nom&lt;/th&gt;
            &lt;th&gt;Âge&lt;/th&gt;
            &lt;th&gt;Ville&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Mr.B&lt;/td&gt;
            &lt;td&gt;25&lt;/td&gt;
            &lt;td&gt;Dakar&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Alice&lt;/td&gt;
            &lt;td&gt;30&lt;/td&gt;
            &lt;td&gt;Paris&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
                    
                    <h3>🔍 Explication :</h3>
                    <ul>
                        <li><code>&lt;table&gt;</code> : Le tableau</li>
                        <li><code>&lt;thead&gt;</code> : En-tête du tableau</li>
                        <li><code>&lt;tbody&gt;</code> : Corps du tableau</li>
                        <li><code>&lt;tr&gt;</code> : Ligne (Table Row)</li>
                        <li><code>&lt;th&gt;</code> : Cellule d'en-tête (Table Header)</li>
                        <li><code>&lt;td&gt;</code> : Cellule de données (Table Data)</li>
                    </ul>
                    
                    <h3>📏 Fusionner des cellules</h3>
                    <pre><code>&lt;!-- Fusionner horizontalement --&gt;
&lt;td colspan="2"&gt;Fusion de 2 colonnes&lt;/td&gt;

&lt;!-- Fusionner verticalement --&gt;
&lt;td rowspan="3"&gt;Fusion de 3 lignes&lt;/td&gt;</code></pre>
                `
            },
            {
                title: 'Chapitre 4 : Formulaires',
                content: `
                    <h2>📝 Les formulaires HTML</h2>
                    <p>Les formulaires permettent de <strong>collecter des données</strong> de l'utilisateur.</p>
                    
                    <h3>Structure de base</h3>
                    <pre><code>&lt;form action="/traitement.php" method="POST"&gt;
    &lt;!-- Champs du formulaire --&gt;
&lt;/form&gt;</code></pre>
                    <ul>
                        <li><code>action</code> : URL où envoyer les données</li>
                        <li><code>method</code> : GET ou POST</li>
                    </ul>
                    
                    <h3>📋 Les champs de saisie</h3>
                    
                    <h4>Champ texte</h4>
                    <pre><code>&lt;label for="nom"&gt;Nom :&lt;/label&gt;
&lt;input type="text" id="nom" name="nom" placeholder="Ton nom" required&gt;</code></pre>
                    
                    <h4>Email</h4>
                    <pre><code>&lt;label for="email"&gt;Email :&lt;/label&gt;
&lt;input type="email" id="email" name="email" required&gt;</code></pre>
                    
                    <h4>Mot de passe</h4>
                    <pre><code>&lt;label for="mdp"&gt;Mot de passe :&lt;/label&gt;
&lt;input type="password" id="mdp" name="mdp" minlength="6"&gt;</code></pre>
                    
                    <h4>Nombre</h4>
                    <pre><code>&lt;label for="age"&gt;Âge :&lt;/label&gt;
&lt;input type="number" id="age" name="age" min="1" max="120"&gt;</code></pre>
                    
                    <h4>Date</h4>
                    <pre><code>&lt;label for="date"&gt;Date de naissance :&lt;/label&gt;
&lt;input type="date" id="date" name="date"&gt;</code></pre>
                    
                    <h3>☑️ Cases à cocher et boutons radio</h3>
                    
                    <h4>Checkbox (plusieurs choix possibles)</h4>
                    <pre><code>&lt;input type="checkbox" id="html" name="langages" value="html"&gt;
&lt;label for="html"&gt;HTML&lt;/label&gt;

&lt;input type="checkbox" id="css" name="langages" value="css"&gt;
&lt;label for="css"&gt;CSS&lt;/label&gt;</code></pre>
                    
                    <h4>Radio (un seul choix)</h4>
                    <pre><code>&lt;input type="radio" id="debutant" name="niveau" value="debutant"&gt;
&lt;label for="debutant"&gt;Débutant&lt;/label&gt;

&lt;input type="radio" id="expert" name="niveau" value="expert"&gt;
&lt;label for="expert"&gt;Expert&lt;/label&gt;</code></pre>
                    
                    <h3>📜 Zone de texte</h3>
                    <pre><code>&lt;label for="message"&gt;Message :&lt;/label&gt;
&lt;textarea id="message" name="message" rows="5" cols="30"&gt;&lt;/textarea&gt;</code></pre>
                    
                    <h3>📋 Liste déroulante</h3>
                    <pre><code>&lt;label for="pays"&gt;Pays :&lt;/label&gt;
&lt;select id="pays" name="pays"&gt;
    &lt;option value="senegal"&gt;Sénégal&lt;/option&gt;
    &lt;option value="france"&gt;France&lt;/option&gt;
    &lt;option value="usa"&gt;États-Unis&lt;/option&gt;
&lt;/select&gt;</code></pre>
                    
                    <h3>🚀 Bouton d'envoi</h3>
                    <pre><code>&lt;button type="submit"&gt;Envoyer&lt;/button&gt;</code></pre>
                    
                    <h3>✅ Exemple complet</h3>
                    <pre><code>&lt;form&gt;
    &lt;label for="nom"&gt;Nom :&lt;/label&gt;
    &lt;input type="text" id="nom" required&gt;
    
    &lt;label for="email"&gt;Email :&lt;/label&gt;
    &lt;input type="email" id="email" required&gt;
    
    &lt;label for="message"&gt;Message :&lt;/label&gt;
    &lt;textarea id="message" rows="4"&gt;&lt;/textarea&gt;
    
    &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;/form&gt;</code></pre>
                `
            },
            {
                title: 'Chapitre 5 : Médias et Multimédia',
                content: `
                    <h2>🎬 Intégrer des médias</h2>
                    
                    <h3>🖼️ Images</h3>
                    <pre><code>&lt;img src="photo.jpg" alt="Description" width="300" height="200"&gt;</code></pre>
                    
                    <h4>Formats d'image courants :</h4>
                    <ul>
                        <li><strong>JPG/JPEG</strong> : Photos (bon compression)</li>
                        <li><strong>PNG</strong> : Images avec transparence</li>
                        <li><strong>GIF</strong> : Animations simples</li>
                        <li><strong>SVG</strong> : Graphiques vectoriels (logos)</li>
                        <li><strong>WEBP</strong> : Format moderne (léger)</li>
                    </ul>
                    
                    <h3>🎵 Audio</h3>
                    <pre><code>&lt;audio controls&gt;
    &lt;source src="musique.mp3" type="audio/mpeg"&gt;
    &lt;source src="musique.ogg" type="audio/ogg"&gt;
    Ton navigateur ne supporte pas l'audio.
&lt;/audio&gt;</code></pre>
                    <p><code>controls</code> affiche les boutons play/pause</p>
                    
                    <h3>🎥 Vidéo</h3>
                    <pre><code>&lt;video width="640" height="360" controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;source src="video.webm" type="video/webm"&gt;
    Ton navigateur ne supporte pas la vidéo.
&lt;/video&gt;</code></pre>
                    
                    <h4>Attributs utiles :</h4>
                    <ul>
                        <li><code>autoplay</code> : Lecture automatique</li>
                        <li><code>loop</code> : Boucle infinie</li>
                        <li><code>muted</code> : Son coupé par défaut</li>
                        <li><code>poster="image.jpg"</code> : Image de couverture</li>
                    </ul>
                    
                    <h3>📺 Intégrer une vidéo YouTube</h3>
                    <pre><code>&lt;iframe width="560" height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0" allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>
                    
                    <h3>🗺️ Google Maps</h3>
                    <pre><code>&lt;iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="600" height="450"
    frameborder="0"&gt;
&lt;/iframe&gt;</code></pre>
                `
            }
        ]
    },
    css: {
        title: 'CSS - Feuilles de style',
        lessons: [
            {
                title: 'Chapitre 1 : Introduction au CSS',
                content: `
                    <h2>🎨 Qu'est-ce que le CSS ?</h2>
                    <p><strong>CSS</strong> signifie <strong>Cascading Style Sheets</strong> (Feuilles de Style en Cascade).</p>
                    <p>Le CSS permet de <strong>styliser</strong> et <strong>mettre en forme</strong> les pages HTML.</p>
                    
                    <div style="background: rgba(99, 102, 241, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <p><strong>💡 Analogie :</strong> Si le HTML est la structure d'une maison, le CSS est la peinture, la décoration et le mobilier !</p>
                    </div>
                    
                    <h3>📝 Les 3 façons d'ajouter du CSS</h3>
                    
                    <h4>1. CSS inline (dans la balise)</h4>
                    <pre><code>&lt;p style="color: red; font-size: 20px;"&gt;Texte rouge&lt;/p&gt;</code></pre>
                    <p><strong>❌ Pas recommandé</strong> : difficile à maintenir</p>
                    
                    <h4>2. CSS interne (dans le &lt;head&gt;)</h4>
                    <pre><code>&lt;head&gt;
    &lt;style&gt;
        p {
            color: blue;
            font-size: 18px;
        }
    &lt;/style&gt;
&lt;/head&gt;</code></pre>
                    <p><strong>✅ OK</strong> pour les petits projets</p>
                    
                    <h4>3. CSS externe (fichier séparé)</h4>
                    <pre><code>&lt;!-- Dans le HTML --&gt;
&lt;head&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;

/* Dans style.css */
p {
    color: green;
    font-size: 16px;
}</code></pre>
                    <p><strong>✅✅ RECOMMANDÉ</strong> : meilleure organisation</p>
                    
                    <h3>🎯 Les sélecteurs CSS</h3>
                    
                    <h4>Sélecteur d'élément</h4>
                    <pre><code>p {
    color: blue;
}

h1 {
    font-size: 36px;
}</code></pre>
                    <p>Cible <strong>TOUS</strong> les éléments de ce type</p>
                    
                    <h4>Sélecteur de classe</h4>
                    <pre><code>/* CSS */
.ma-classe {
    color: red;
}

/* HTML */
&lt;p class="ma-classe"&gt;Texte rouge&lt;/p&gt;</code></pre>
                    <p>Réutilisable sur plusieurs éléments</p>
                    
                    <h4>Sélecteur d'ID</h4>
                    <pre><code>/* CSS */
#mon-id {
    background: yellow;
}

/* HTML */
&lt;div id="mon-id"&gt;Fond jaune&lt;/div&gt;</code></pre>
                    <p><strong>UNIQUE</strong> : un seul élément par page</p>
                    
                    <div style="background: rgba(239, 68, 68, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <p><strong>⚠️ Règle importante :</strong> Utilise les <strong>classes</strong> pour le style, les <strong>IDs</strong> pour JavaScript !</p>
            
