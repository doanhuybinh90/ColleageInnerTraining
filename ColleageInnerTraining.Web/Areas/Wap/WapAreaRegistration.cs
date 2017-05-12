﻿using System.Web.Mvc;

namespace ColleageInnerTraining.Web.Areas.Wap
{
    public class WapAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Wap";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Wap_default",
                "Wap/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                new string[] { "ColleageInnerTraining.Web.Areas.Wap.Controllers.*" }
            );
        }
    }
}