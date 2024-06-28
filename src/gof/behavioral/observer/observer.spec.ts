import { Consumer } from "./consumer";
import { Producer } from "./producer";
import { ShowUseCase } from "./usecase";

test("Devo adicionar 2 usecases ao Producer e notificar  uma atualização.", () => {
  const usecase_1 = new Consumer(new ShowUseCase());
  const usecase_2 = new Consumer(new ShowUseCase());

  const producer = new Producer();
  producer.subscribe(usecase_1, usecase_2);
  producer.notify();
});
