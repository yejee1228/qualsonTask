import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  "question":
  {
    text: string,
    image: string,
    option1: string,
    option2: string,
    optionPoint1: number,
    optionPoint2: number,
  }[]
}

//optionPoint : 각 문항의 점수를 소수로 할당.
const question = [
  {
    text: "새로운 사람과의 첫 대면. \n어색한 정적만 흐르고 있다. \n이럴 때 나는?",
    image: "/images/questionImage1.png",
    option1: "상대가 말을 꺼낼 때까지 기다린다.",
    option2: "먼저 말을 꺼낸다.",
    optionPoint1: 1,
    optionPoint2: 2,
  },
  {
    text: "친구들과 함께 찾은 음악 페스티벌. \n옆에 있던 사람들이 같이 놀자며 다가온다. \n머릿속에 드는 생각은?",
    image: "/images/questionImage2.png",
    option1: "그냥 우리끼리 놀면 안 되나?",
    option2: "같이 놀면 더 재밌을 것 같은데!",
    optionPoint1: 3,
    optionPoint2: 5,
  },
  {
    text: "일찍 퇴근하게 된 어느 날, \n저녁까지는 시간이 여유롭다. 당신은?",
    image: "/images/questionImage3.png",
    option1: "이런 날 그냥 집에 갈 수 없지! \n만날 친구를 찾는다.",
    option2: "기분좋게 집에 간다.",
    optionPoint1: 0,
    optionPoint2: 0,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  if (method === "GET") {
    return res.status(200).json({
      question
    })
  }
}
