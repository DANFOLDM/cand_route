console.log("Green Getaways website loaded successfully.");

// cards selcting function //
<script>
function openRoutePage(route) {
    // Replace 'visual.html' with the actual URL of the page you want to open
    const routePages = {
        visual: 'maps.html',
        // You can add more routes here
        hearing: 'maps.html',
        mobility: 'maps.html'
    };

    // Open the specific page based on the route parameter
    if (routePages[route]) {
        window.location.href = routePages[route];
    } else {
        console.error('Route not defined:', route);
    }
}
</script>
