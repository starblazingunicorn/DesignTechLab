import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.d5d32515.mjs';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './_...slug_.astro.3be235c2.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404.astro.3afeec25.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/components/Grid.astro");

const $$Astro$2 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card astro-LGKM4U2A"${addAttribute(`/work/${slug}`, "href")}>
	<span class="title astro-LGKM4U2A">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/components/PortfolioPreview.astro");

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills astro-AB4IHPZS">
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Frontend</h2>
		<p class="astro-AB4IHPZS">Building UI component</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "trophy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">UX Design</h2>
		<p class="astro-AB4IHPZS">passion for solving complex problem with user centered</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Design system</h2>
		<p class="astro-AB4IHPZS">Experist in design system</p>
	</div>
</section>`;
}, "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/components/Skills.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
		<div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
			<header class="hero astro-J7PV25F6">
				${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is Viyan Ateaa", "tagline": "I am a Design technologist who is based in Stockholm, Sweden.", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Frontend Developer` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "microphone-stage", "size": "1.33em", "class": "astro-J7PV25F6" })} UX Design` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "class": "astro-J7PV25F6" })} Design system` })}
					</div>
				` })}

				<!-- <img
					alt="Jeanine White smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/portrait.jpg"
				/> -->
			</header>

			${renderComponent($$result2, "Skills", $$Skills, { "class": "astro-J7PV25F6" })}
		</div>

		<main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
			<section class="section with-background with-cta astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Selected Work</h3>
					<p class="astro-J7PV25F6">Take a look below at some of my featured work for clients from the past few years.</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li class="astro-J7PV25F6">
									${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "class": "astro-J7PV25F6" })}
								</li>`)}` })}
				</div>

				<div class="cta astro-J7PV25F6">
					${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
						View All
						${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "class": "astro-J7PV25F6" })}
					` })}
				</div>
			</section>

			<!-- <section class="section with-background bg-variant">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Mentions</h3>
					<p>
						I have been fortunate enough to recieve praise for my work in several publications. Take
						a look below to learn more.
					</p>
				</header>

				<div class="gallery">
					<Grid variant="small">
						{
							['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'].map((brand) => (
								<li class="mention-card">
									<p>{brand}</p>
								</li>
							))
						}
					</Grid>
				</div>
			</section> -->
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
	</div>
` })}`;
}, "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/pages/index.astro");

const $$file = "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
