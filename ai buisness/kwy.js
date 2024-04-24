<script></script>
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});
