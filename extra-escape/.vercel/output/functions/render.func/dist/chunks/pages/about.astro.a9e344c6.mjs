import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d5d32515.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.3afeec25.mjs';
import { $ as $$ContactCTA } from './_...slug_.astro.3be235c2.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                               */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Viyan Ateaa", "description": "About Viyan Ateaa Lorem Ipsum", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="stack gap-20 astro-KH7BTL4R">
		<main class="wrapper about astro-KH7BTL4R">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate`
				
			` })}

			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Background</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">
						 
					</p>
					<p class="astro-KH7BTL4R">
						 
					</p>
					<p class="astro-KH7BTL4R">
						 
					</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Education</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">Corporis voluptates tenetur laudantium.</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Skills</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">Design systems</p>
					<p class="astro-KH7BTL4R">Design systems</p>
				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-KH7BTL4R" })}
	</div>
` })}`;
}, "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/pages/about.astro");

const $$file = "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
