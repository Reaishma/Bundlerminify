using WebOptimizer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllersWithViews();

// Add WebOptimizer for runtime bundling and minification
builder.Services.AddWebOptimizer(pipeline =>
{
    // Bundle CSS files
    pipeline.AddCssBundle("/css/bundle.css", "css/site.css", "css/bootstrap.min.css");
    
    // Bundle JavaScript files
    pipeline.AddJavaScriptBundle("/js/bundle.js", "js/site.js", "js/bootstrap.min.js");
    
    // Minify individual files
    pipeline.MinifyCssFiles("css/**/*.css");
    pipeline.MinifyJsFiles("js/**/*.js");
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

// Use WebOptimizer middleware before static files
app.UseWebOptimizer();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();