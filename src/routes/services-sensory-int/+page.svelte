<script>
	import { base } from '$app/paths';
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'n50-on-blue';
	export let headerTitle = 'Sensory Integration';
	// Need this to make this link work in GH Pages build workflows
	const alertLink = `services-alert-program`;
	const sensoryDietLink = `services-sensory-diet`;
</script>

<svelte:head>
	<title>KidzCanDurban-Sensory Integration</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-n50">
		<p class="mt-2">
			Our therapists are trained and skilled in Sensory Integration assessment and treatment
			options.
		</p>
		<p>
			Sensory Integration is a post-graduate field of study that is specific to Occupational
			Therapy.
			<a
				class="views-link"
				href="http://www.efrconline.org/admin/files/Parent%27sGuideToSI.pdf"
				target="_blank"
				rel="noopener"
				>(Parent guide to Sensory Integration)<span class="sr-only">
					, Warning, screen readers, this is an external link
				</span></a>
		</p>
		<p>
			It was developed from a body of work by A. Jean Ayres (PhD) and other occupational and
			physical therapists.
		</p>
		<p>
			Literature from fields such as neuropsychology, neurology, physiology, child development and
			psychology contributed to the development of Sensory Integration theory and treatment
			techniques.
		</p>
		<p>
			Not all children with learning, developmental or behavioural problems have underlying Sensory
			Integrative difficulties, however the following observations are possible signs of Sensory
			Integration dysfunction:
		</p>
		<ul class="views-list-item">
			<li>Activity levels that are unusually high or low.</li>
			<li>Overly sensitive to touch, movement, sights or sounds.</li>
			<li>
				Under-reactive to sensory stimulation. May seem oblivious to pain or to body position.
			</li>
			<li>Seeking out intense sensory experiences e.g. body whirling or crashing into objects.</li>
			<li>Coordination problems and/or unusually poor balance.</li>
			<li>Difficulty learning new tasks that require motor coordination.</li>
			<li>Delayed speech, motor skills or academic achievement despite normal intelligence.</li>
			<li>Poor organisation of behaviour.</li>
			<li>Impulsivity.</li>
			<li>Difficulty adjusting to new situations.</li>
			<li>Poor self concept.</li>
			<li>Avoidance or withdrawal from tasks and activities that peers enjoy.</li>
			<li>Repetitive or compulsive behaviours.</li>
		</ul>
		<p>
			Our therapy rooms full of appealing sensory equipment: platforms to swing on, bolsters to
			climb over, trampolines to jump on and ball pools to play in.
		</p>
		<p>
			For a child, Sensory Integration therapy is like play and it may look like mere play to the
			adult observer but it is important work, as with the guidance of a trained professional, the
			child can learn to overcome issues that probably would not have been addressed in an unguided
			play environment.
		</p>
		<p>Our therapists' knowledge, experience and qualifications enable treatment to:</p>
		<ul class="views-list-item">
			<li>
				Desensitise the child's sensory sensitivities by slowly and respectfully exposing them to
				specific sensory activities.
			</li>
			<li>
				Gradually increase the demands on the child, to result in an organised and more mature
				response to sensory input.
			</li>
			<li>
				Equip parents, guardians and/or teachers with skills to assist the child to feel calm and
				focused.
			</li>
			<li>Assist the child to develop age-appropriate self-regulation strategies.</li>
			<li>
				Improve sensory discrimination so that the child will develop underlying abilities that will
				enable them to learn new skills, interact positively with peers, play more creatively and
				achieve success in activities at home and at school.
			</li>
		</ul>
		<p>
			To achieve these aims the therapist may recommend a
			<a href="{base}/{sensoryDietLink}" class="views-link">Sensory Diet</a>
			or an
			<a href="{base}/{alertLink}" class="views-link">Alert Program</a>, depending on the child's
			needs and abilities.
		</p>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
