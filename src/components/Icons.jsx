const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 8.5V6.8c0-.8.3-1.3 1.4-1.3h1.6V2.7c-.3 0-1.2-.1-2.2-.1-2.3 0-3.8 1.4-3.8 4v1.9H9v3.1h2.5V21h3v-8.9h2.5l.4-3.1h-2.9Z" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20.4 11.6a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.6-5A8.4 8.4 0 1 1 20.4 11.6Z" />
      <path d="M9 8.4c.2-.4.4-.4.6-.4h.6c.2 0 .4 0 .6.5l.7 1.7c.1.3 0 .5-.1.7l-.4.5c.3.6.8 1.1 1.4 1.4l.5-.4c.2-.2.4-.2.7-.1l1.7.7c.4.2.5.4.5.6v.6c0 .3-.2.6-.6.7-.6.2-1.5.1-2.3-.3a9 9 0 0 1-3.9-3.9c-.4-.8-.5-1.7-.3-2.3 0-.4.3-.6.5-.7Z" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  )
}

export function ChevronIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
