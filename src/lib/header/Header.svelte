<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
	import Button from '$lib/components/button.svelte';
    import Icon from "$lib/components/icons.svelte";
    import {patches} from '$lib/stores/patch_list';

	let latest_patch = $patches;
	console.log(latest_patch);
</script>

<header>
	<div class="corner">
		<a href="/">
			<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 924.5 164.5"><polygon points="0 5.64 0 164.5 160 164.5 160 4.64 79.5 85.14 0 5.64"/><path d="M358.5,124.99c-.17,0-.33,.01-.5,.01-19.76,0-35.77-16.02-35.77-35.77,0-.08,0-.15,0-.23h114.18c.05-1.16,.09-2.33,.09-3.5,0-43.35-35.15-78.5-78.5-78.5s-78.5,35.15-78.5,78.5,35.15,78.5,78.5,78.5c28.95,0,54.22-15.68,67.83-39h-67.33Z"/><path d="M836.06,3.89c-.19,0-.37,.01-.56,.01V163.99c.19,0,.37,.01,.56,.01,48.84,0,88.44-35.84,88.44-80.06S884.91,3.89,836.06,3.89Z"/><polygon points="606.5 43 563.5 0 563.5 160 723.5 160 680.5 117 606.5 117 606.5 43"/></svg>
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/notes/'+latest_patch[0]}>
				<a sveltekit:prefetch href="/notes/{latest_patch[0]}">Update Notes</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
		<Button new_class="sharp">
			<Icon name="moon" /> 
		</Button>
	</div>
</header>

<style>

	:global(body) {
		transition: background-color 0.3s
	}
	
	@media (prefers-color-scheme: dark){
		:global(body) {
			background-color: #1d3040;
			color: #bfc2c7;
		}
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}

	#logo{
		fill:#000;
		width:4em;
	}
	:global(body.dark-mode) #logo{
		fill:#fff;
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 6em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 4em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

</style>
