import variables from '../variables'

const Pipe = ({ customWidth = 100, customHeight = 2, ...props }) => {
  const movingPipeLength = customWidth / 10
  const ContainingRect = (props) => (<rect {...props} fill={variables.lightSkyBlue} x="0" y="0" width={customWidth} height={customHeight} />)

  return (
    <g {...props}>
      <ContainingRect />

      <g>
        <rect fill={variables.denim} x="0" y="0" width={movingPipeLength} height={customHeight} />
        <animateMotion fill="black" dur="1s" repeatCount="indefinite">
          <mpath xlinkHref="#pipeMotionPath" />
        </animateMotion>
      </g>

      <path d={`M0,0 ${customWidth - movingPipeLength},0`} id="pipeMotionPath" />
    </g>
  )
}

export default Pipe
