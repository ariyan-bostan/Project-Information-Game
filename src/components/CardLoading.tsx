import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CardLoading = () => {
  return (
    <Card height={"400px"}  borderRadius={"20px"} overflow={"hidden"} margin={"10px"}>
        <Skeleton />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default CardLoading