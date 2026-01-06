type PaperEdgeProps = {
  className?: string
}

const PaperEdge = ({ className = '' }: PaperEdgeProps): JSX.Element => (
  <svg
    className={`block ${className}`}
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M0 0H1200V46C1125 78 1050 32 975 58C900 84 825 30 750 56C675 82 600 34 525 58C450 82 375 34 300 58C225 82 150 36 75 60C40 70 20 62 0 66V0Z"
      fill="currentColor"
    />
  </svg>
)

export default PaperEdge
