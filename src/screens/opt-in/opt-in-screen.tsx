import React from "react"
import { JoinNow } from "./join-now"
import { SimpleSteps } from "./simple-steps"
import { TermsAndConditionsMadeEasy } from "./terms-and-conditions"
import { WhyJoin } from "./why-join"

export const OptInScreen: React.FC = () => {
  return (
    <div>
      <JoinNow />
      <SimpleSteps />
      <WhyJoin />
      <TermsAndConditionsMadeEasy />
    </div>
  );
}
