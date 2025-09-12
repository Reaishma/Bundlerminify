using WebOptimizer;

namespace BundlerApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            // Add WebOptimizer for runtime bundling and minification
            services.AddWebOptimizer(pipeline =>
            {
                // Bundle CSS files
                pipeline.AddCssBundle("/css/bundle.css", "css/site.css", "css/bootstrap.min.css");
                
                // Bundle JavaScript files
                pipeline.AddJavaScriptBundle("/js/bundle.js", "js/site.js", "js/bootstrap.min.js");
                
                // Minify individual files
                pipeline.MinifyCssFiles("css/**/*.css");
                pipeline.MinifyJsFiles("js/**/*.js");
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
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

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}