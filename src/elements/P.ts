import styled from '@emotion/styled'

type PProps = {
	large?: boolean
}

const P = styled.p<PProps>`
	font-size: 14px;
	${p => p.large && 'font-size: 20px;'}
`

export default P
